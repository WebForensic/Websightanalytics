import React from "react";

const AppLayout = () => {
  return (
    <div className="app-layout" style={styles.wrapper}>
      <header style={styles.header}>
        WebSight Analytics
      </header>
      <section style={styles.section}>
        <p>
          You pay a monthly fee to a web developer or agency. But what are you actually getting?
        </p>
        <p>
          70% of the websites we audit are burning money — overpromised, underdelivered. We cut through the noise and show you, with evidence, if your site is helping you or hurting you.
        </p>
        <p style={{ marginTop: '1.5rem', fontWeight: 'bold', color: '#00ffc3' }}>
          If your site scores above 90%, your audit is 100% free — and we’ll tell you to keep your team. No upsell. Just truth.
        </p>
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: '4rem 2rem',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Inter, sans-serif',
    lineHeight: 1.6,
    animation: 'fadeIn 1.5s ease-in-out',
  },
  header: {
    fontSize: '2.8rem',
    textAlign: 'center',
    marginBottom: '2rem',
    color: '#0ff',
    letterSpacing: '0.05em',
  },
  section: {
    maxWidth: '880px',
    margin: '0 auto',
    fontSize: '1.2rem',
    color: '#ccc',
  },
};

export default AppLayout;
