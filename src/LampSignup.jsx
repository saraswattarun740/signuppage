import React, { useState } from "react";
import "./LampSignup.css";
import { FaLightbulb } from "react-icons/fa";

const LampSignup = () => {
  const [lampOn, setLampOn] = useState(false);

  return (
    <section className={`lamp-section ${lampOn ? "on" : "off"}`}>
      <div className="lamp">
        <FaLightbulb
          className={`bulb ${lampOn ? "glow" : ""}`}
          onClick={() => setLampOn(!lampOn)}
        />
        <p className="hint">Tap the lamp to {lampOn ? "turn off" : "turn on"}</p>
      </div>

      {lampOn && (
        <div className="signup-card">
          <h2>Sign Up</h2>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Create Account</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default LampSignup;
