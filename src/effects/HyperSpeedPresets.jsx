import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// Your presets configuration
const hyperspeedPresets = {
  one: {
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 3,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0x131318,
      brokenLines: 0x131318,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  },
  // ... (include all other presets here)
};

const HyperspeedPresets = ({ width = '100%', height = '100vh', className = '' }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const [currentPreset, setCurrentPreset] = useState('one');
  const [isSpeedingUp, setIsSpeedingUp] = useState(false);
  
  // Three.js variables
  const scene = useRef(null);
  const camera = useRef(null);
  const renderer = useRef(null);
  const cars = useRef([]);
  const lightSticks = useRef([]);
  const speedMultiplier = useRef(1);
  const time = useRef(0);
  const animationId = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Initialize Three.js scene
    initThreeJS();
    createHighway();
    animate();

    // Cleanup
    return () => {
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
      if (renderer.current) {
        mountRef.current?.removeChild(renderer.current.domElement);
        renderer.current.dispose();
      }
    };
  }, []);

  // Recreate highway when preset changes
  useEffect(() => {
    if (scene.current) {
      createHighway();
    }
  }, [currentPreset]);

  const initThreeJS = () => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    // Scene
    scene.current = new THREE.Scene();
    
    // Camera
    camera.current = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.current.position.set(0, 2, 10);
    
    // Renderer
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setSize(width, height);
    renderer.current.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.current.domElement);
  };

  const random = (min, max) => Math.random() * (max - min) + min;

  const createHighway = () => {
    if (!scene.current) return;

    // Clear existing objects
    while(scene.current.children.length > 0) {
      scene.current.remove(scene.current.children[0]);
    }
    
    cars.current = [];
    lightSticks.current = [];
    
    const preset = hyperspeedPresets[currentPreset];
    
    // Set background
    scene.current.background = new THREE.Color(preset.colors.background);
    
    // Create road
    const roadGeometry = new THREE.PlaneGeometry(preset.roadWidth, preset.length);
    const roadMaterial = new THREE.MeshBasicMaterial({ color: preset.colors.roadColor });
    const road = new THREE.Mesh(roadGeometry, roadMaterial);
    road.rotation.x = -Math.PI / 2;
    scene.current.add(road);
    
    // Create center island
    const islandGeometry = new THREE.PlaneGeometry(preset.islandWidth, preset.length);
    const islandMaterial = new THREE.MeshBasicMaterial({ color: preset.colors.islandColor });
    const island = new THREE.Mesh(islandGeometry, islandMaterial);
    island.rotation.x = -Math.PI / 2;
    island.position.y = 0.01;
    scene.current.add(island);
    
    // Create light sticks
    const stickMaterial = new THREE.MeshBasicMaterial({ color: preset.colors.sticks });
    for (let i = 0; i < preset.totalSideLightSticks; i++) {
      const z = random(-preset.length/2, preset.length/2);
      const height = random(preset.lightStickHeight[0], preset.lightStickHeight[1]);
      const width = random(preset.lightStickWidth[0], preset.lightStickWidth[1]);
      
      const leftStick = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, width),
        stickMaterial
      );
      leftStick.position.set(-preset.roadWidth/2 - 2, height/2, z);
      scene.current.add(leftStick);
      lightSticks.current.push(leftStick);
    }
    
    // Create cars
    for (let i = 0; i < preset.lightPairsPerRoadWay; i++) {
      const z = random(-preset.length/2, preset.length/2);
      const length = random(preset.carLightsLength[0], preset.carLightsLength[1]);
      const radius = random(preset.carLightsRadius[0], preset.carLightsRadius[1]);
      const shiftX = random(preset.carShiftX[0], preset.carShiftX[1]);
      
      // Left cars
      const leftCarColor = preset.colors.leftCars[Math.floor(Math.random() * preset.colors.leftCars.length)];
      const leftCar = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, length, 8),
        new THREE.MeshBasicMaterial({ color: leftCarColor })
      );
      leftCar.position.set(-preset.roadWidth/4 + shiftX, 0.5, z);
      leftCar.rotation.x = Math.PI / 2;
      leftCar.userData = { 
        speed: random(preset.movingAwaySpeed[0], preset.movingAwaySpeed[1]),
        side: 'left'
      };
      scene.current.add(leftCar);
      cars.current.push(leftCar);
      
      // Right cars
      const rightCarColor = preset.colors.rightCars[Math.floor(Math.random() * preset.colors.rightCars.length)];
      const rightCar = new THREE.Mesh(
        new THREE.CylinderGeometry(radius, radius, length, 8),
        new THREE.MeshBasicMaterial({ color: rightCarColor })
      );
      rightCar.position.set(preset.roadWidth/4 + shiftX, 0.5, z);
      rightCar.rotation.x = Math.PI / 2;
      rightCar.userData = { 
        speed: random(preset.movingCloserSpeed[0], preset.movingCloserSpeed[1]),
        side: 'right'
      };
      scene.current.add(rightCar);
      cars.current.push(rightCar);
    }
    
    // Update camera FOV
    camera.current.fov = preset.fov;
    camera.current.updateProjectionMatrix();
  };

  const animate = () => {
    animationId.current = requestAnimationFrame(animate);
    
    const deltaTime = 0.016;
    time.current += deltaTime;
    
    const preset = hyperspeedPresets[currentPreset];
    
    // Update cars
    cars.current.forEach(car => {
      car.position.z += car.userData.speed * deltaTime * speedMultiplier.current;
      
      if (car.userData.side === 'left' && car.position.z > preset.length/2) {
        car.position.z = -preset.length/2;
      } else if (car.userData.side === 'right' && car.position.z < -preset.length/2) {
        car.position.z = preset.length/2;
      }
      
      const distance = Math.abs(car.position.z - camera.current.position.z);
      const maxDistance = preset.length / 2;
      const alpha = Math.max(0, 1 - (distance / maxDistance) * preset.carLightsFade);
      car.material.opacity = alpha;
      car.material.transparent = true;
    });
    
    // Apply distortion
    if (preset.distortion === 'turbulentDistortion') {
      cars.current.forEach(car => {
        car.position.x += Math.sin(time.current * 2 + car.position.z * 0.1) * 0.05;
      });
    }
    
    // Update camera FOV for speed effect
    const targetFov = isSpeedingUp ? preset.fovSpeedUp : preset.fov;
    camera.current.fov += (targetFov - camera.current.fov) * 0.1;
    camera.current.updateProjectionMatrix();
    
    if (renderer.current && scene.current && camera.current) {
      renderer.current.render(scene.current, camera.current);
    }
  };

  const handleSpeedUp = () => {
    setIsSpeedingUp(true);
    speedMultiplier.current = hyperspeedPresets[currentPreset].speedUp;
    setTimeout(() => {
      setIsSpeedingUp(false);
      speedMultiplier.current = 1;
    }, 2000);
  };

  const handleSlowDown = () => {
    speedMultiplier.current = 0.3;
    setTimeout(() => {
      speedMultiplier.current = 1;
    }, 2000);
  };

  return (
    <div className={`hyperspeed-container ${className}`} style={{ width, height, position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      
      {/* Controls */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        background: 'rgba(0, 0, 0, 0.8)',
        padding: '20px',
        borderRadius: '10px',
        color: 'white',
        fontFamily: 'monospace'
      }}>
        <h3 style={{ margin: '0 0 15px 0', color: '#0ff' }}>HYPERSPEED PRESETS</h3>
        
        <div style={{ marginBottom: '15px' }}>
          {Object.keys(hyperspeedPresets).map((preset) => (
            <button
              key={preset}
              onClick={() => setCurrentPreset(preset)}
              style={{
                background: currentPreset === preset ? '#ff1744' : '#333',
                border: '2px solid #444',
                color: 'white',
                margin: '2px',
                padding: '8px 16px',
                borderRadius: '5px',
                cursor: 'pointer',
                textTransform: 'uppercase'
              }}
            >
              {preset}
            </button>
          ))}
        </div>
        
        <div>
          <button
            onClick={handleSpeedUp}
            style={{
              background: '#222',
              border: '1px solid #555',
              color: '#0ff',
              padding: '8px 16px',
              margin: '0 5px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            SPEED UP
          </button>
          <button
            onClick={handleSlowDown}
            style={{
              background: '#222',
              border: '1px solid #555',
              color: '#0ff',
              padding: '8px 16px',
              margin: '0 5px',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            SLOW DOWN
          </button>
        </div>
      </div>
    </div>
  );
};

export default HyperspeedPresets;