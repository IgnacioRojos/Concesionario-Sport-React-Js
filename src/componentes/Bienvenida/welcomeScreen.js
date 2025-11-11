import { useEffect, useState } from "react";
import "./welcomeScreen.css";
import logo from "./assets/auto.jpg"; // reemplazá con tu logo real

const WelcomeScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeOut(true), 2000); // empieza fade out a los 2s
    const timer2 = setTimeout(onFinish, 3000); // desaparece totalmente a los 3s
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`welcome-screen ${fadeOut ? "fade-out" : ""}`}>
      <img src={logo} alt="Logo Concesionaria" className="welcome-logo" />
      <h1 className="welcome-text">Concesionario Sport</h1>
    </div>
  );
};

export default WelcomeScreen;