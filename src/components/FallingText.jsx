import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const FallingText = ({
  text,
  highlightWords = [],
  highlightClass = '',
  trigger = 'auto',
  backgroundColor = 'black',
  gravity = 0.7,
  fontSize = '2rem',
  mouseConstraintStiffness = 0.8,
}) => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const Bodies = Matter.Bodies;
    const Composite = Matter.Composite;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create();
    engine.gravity.y = gravity;

    const render = Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: backgroundColor,
      },
    });

    const words = text.split(' ').map((word, index) => {
      const cleanWord = word.replace(/[.,]/g, '');
      const color = highlightWords.includes(cleanWord) ? 'orange' : 'white';

      return Bodies.rectangle(
        100 + index * 80,
        50,
        word.length * 14,
        30,
        {
          render: {
            fillStyle: color,
          },
          restitution: 0.7,
        }
      );
    });

    const floor = Bodies.rectangle(window.innerWidth / 2, window.innerHeight, window.innerWidth, 40, {
      isStatic: true,
    });

    Composite.add(engine.world, [...words, floor]);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: mouseConstraintStiffness,
        render: { visible: false },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Composite.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [text]);

  return <div ref={sceneRef} style={{ width: '100%', height: '100vh' }} />;
};

export default FallingText;
