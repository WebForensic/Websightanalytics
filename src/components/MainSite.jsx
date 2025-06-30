// src/components/MainSite.jsx
import { SpeedInsights } from '@vercel/speed-insights/react';
const MainSite = () => {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center">Welcome to WebSight Analytics</h1>
      <p className="text-center mt-4 text-gray-300">Your forensic-grade web visibility partner.</p>
    </div>
  )

function App() {
  return (
    <>
      {/* your layout/components here */}
      <SpeedInsights />
    </>
  );
}



};

export default MainSite;
