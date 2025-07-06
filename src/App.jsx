import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  const [loadingStep, setLoadingStep] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLoadingStep(1), 2000);
    const timer2 = setTimeout(() => setLoadingStep(2), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (loadingStep < 2) {
    return (
      <div className="h-screen flex flex-col justify-center items-center bg-black text-white text-3xl overflow-hidden">
        {loadingStep === 0 && (
          <p
            className="text-4xl font-bold animate-upfade"
          >
            Welcome to My Portfolio
          </p>
        )}
        {loadingStep === 1 && (
          <p
            className="text-4xl font-bold animate-upfade"
          >
            My Name Is Pranav Gadewar
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="pt-20 bg-white dark:bg-black min-h-screen text-black dark:text-white transition-colors duration-500 ease-in-out">
        <Home />
      </main>
    </div>
  );
};

export default App;
