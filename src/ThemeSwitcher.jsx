import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [hue, setHue] = useState(210);       // default: blue
  const [saturation, setSaturation] = useState(13); // default: 13%
  const [lightness, setLightness] = useState(18);   // default: 18%

  const handleHueChange = (e) => {
    const newHue = e.target.value;
    setHue(newHue);
    document.documentElement.style.setProperty('--nav-h', newHue);
  };

  const handleSaturationChange = (e) => {
    const newS = e.target.value;
    setSaturation(newS);
    document.documentElement.style.setProperty('--nav-s', `${newS}%`);
  };

  const handleLightnessChange = (e) => {
    const newL = e.target.value;
    setLightness(newL);
    document.documentElement.style.setProperty('--nav-l', `${newL}%`);
  };

  return (
    <div className="theme-switcher">
      <h3>Adjust Nav Color (HSL)</h3>

      <label>
        Hue: {hue}°
        <input
          type="range"
          min="0"
          max="360"
          value={hue}
          onChange={handleHueChange}
        />
      </label>

      <label>
        Saturation: {saturation}%
        <input
          type="range"
          min="0"
          max="100"
          value={saturation}
          onChange={handleSaturationChange}
        />
      </label>

      <label>
        Lightness: {lightness}%
        <input
          type="range"
          min="0"
          max="100"
          value={lightness}
          onChange={handleLightnessChange}
        />
      </label>
    </div>
  );
};

export default ThemeSwitcher;