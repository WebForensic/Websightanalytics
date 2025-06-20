import React from 'react';

const WhatWeDo = () => {
  return (
    <div className="what-we-do">
      <div className="container">
        <div className="section-header">
          <h2>What We Do</h2>
          <p className="section-subtitle">
            We provide comprehensive website analytics and optimization services to help your business grow online.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" fill="#3498db"/>
              </svg>
            </div>
            <h3>Website Analytics</h3>
            <p>
              Track visitor behavior, traffic sources, and conversion rates with our advanced analytics dashboard. 
              Get real-time insights into how users interact with your website.
            </p>
            <ul className="service-features">
              <li>Real-time visitor tracking</li>
              <li>Traffic source analysis</li>
              <li>Conversion funnel optimization</li>
              <li>Custom event tracking</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="#e74c3c"/>
              </svg>
            </div>
            <h3>Performance Reporting</h3>
            <p>
              Receive detailed reports on your website's performance with actionable insights and recommendations 
              for improvement delivered straight to your inbox.
            </p>
            <ul className="service-features">
              <li>Weekly performance reports</li>
              <li>Custom dashboards</li>
              <li>Data visualization</li>
              <li>Automated alerts</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#f39c12"/>
              </svg>
            </div>
            <h3>Optimization Consulting</h3>
            <p>
              Work with our experts to identify opportunities for improvement and implement strategies that 
              increase your website's effectiveness and ROI.
            </p>
            <ul className="service-features">
              <li>Site speed optimization</li>
              <li>Conversion rate optimization</li>
              <li>SEO recommendations</li>
              <li>User experience improvements</li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#27ae60"/>
              </svg>
            </div>
            <h3>Data Security & Privacy</h3>
            <p>
              Your data is protected with enterprise-grade security measures. We're fully GDPR compliant and 
              prioritize user privacy in everything we do.
            </p>
            <ul className="service-features">
              <li>GDPR compliant tracking</li>
              <li>Data encryption</li>
              <li>Privacy-first approach</li>
              <li>Secure data storage</li>
            </ul>
          </div>
        </div>

        <div className="cta-section">
          <h3>Ready to Get Started?</h3>
          <p>Join thousands of businesses already using our analytics platform to grow their online presence.</p>
          <button className="cta-button">Start Your Free Trial</button>
        </div>
      </div>

      <style jsx>{`
        .what-we-do {
          padding: 80px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-header h2 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #ffffff, #f8f9fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          margin-bottom: 60px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }

        .service-icon {
          margin-bottom: 25px;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 80px;
          height: 80px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          margin: 0 auto 25px;
        }

        .service-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: white;
        }

        .service-card p {
          font-size: 1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 25px;
        }

        .service-features {
          list-style: none;
          padding: 0;
          text-align: left;
        }

        .service-features li {
          padding: 8px 0;
          color: rgba(255, 255, 255, 0.8);
          position: relative;
          padding-left: 25px;
        }

        .service-features li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #27ae60;
          font-weight: bold;
        }

        .cta-section {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 50px 40px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cta-section h3 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .cta-section p {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 30px;
        }

        .cta-button {
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
          border: none;
          color: white;
          padding: 18px 40px;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.3);
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(255, 107, 107, 0.4);
          background: linear-gradient(135deg, #ff5252, #d32f2f);
        }

        @media (max-width: 768px) {
          .what-we-do {
            padding: 60px 0;
          }

          .container {
            padding: 0 15px;
          }

          .section-header h2 {
            font-size: 2.2rem;
          }

          .services-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .service-card {
            padding: 30px 20px;
          }

          .cta-section {
            padding: 40px 25px;
          }

          .cta-section h3 {
            font-size: 1.6rem;
          }

          .cta-button {
            padding: 15px 30px;
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatWeDo;