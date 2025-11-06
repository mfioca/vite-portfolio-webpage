import React, { useState } from 'react';

const ThemeSwitcher = () => {
  const [hue, setHue] = useState(210);
  const [saturation, setSaturation] = useState(13);
  const [lightness, setLightness] = useState(18);

  const [defaultHue, setDefaultHue] = useState(0.97);   
  const [defaultSaturation, setDefaultSaturation] = useState(100);
  const [defaultExpanded, setDefaultExpanded] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false); 

  const [fontblueHue, setFontblueHue] = useState(207);
  const [fontblueSaturation, setFontblueSaturation] = useState(100);
  const [fontblueLightness, setFontblueLightness] = useState(42);
  const [fontblueExpanded, setFontblueExpanded] = useState(false);

  const handleCSSVarChange = (setter, variableName, unit = '') => (e) => {
    const value = e.target.value;
    setter(value);
    document.documentElement.style.setProperty(variableName, `${ value }${ unit }`);
  };

  return (
    <div className="theme-switcher">
      <div className="theme-section">
        <h3 onClick={() => setNavExpanded(!navExpanded)}>
          Navigation Theme Color { navExpanded ? '▲' : '▼' }
        </h3>
        {navExpanded && (
          <div className="theme-section-content">
            <div className="theme-slider-group">
              <div className="color-preview-row">
                <div className="color-preview-label">Preview:</div>
                <div className="color-preview" style={{ backgroundColor: 'var(--navcolor)' }} />
              </div>
              <label>
                Hue: { hue }°
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={ hue }
                  onChange={handleCSSVarChange(setHue, '--nav-h')}
                />
              </label>
              <label>
                Saturation: { saturation }%
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ saturation }
                  onChange={handleCSSVarChange(setSaturation, '--nav-s', '%')}
                />
              </label>
              <label>
                Lightness: { lightness }%
                <input
                  type="range"
                  min="0"
                  max="65"
                  value={ lightness }
                  onChange={handleCSSVarChange(setLightness, '--nav-l', '%')}
                />
              </label>
              <div className="theme-note">
                (Lightness Capped at 65% for text contrast)
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Default Theme Color (lightness locked at 88%) */}
      <div className="theme-section">
        <h3 onClick={() => setDefaultExpanded(!defaultExpanded)}>
          Default Theme Color { defaultExpanded ? '▲' : '▼' }
        </h3>
        {defaultExpanded && (
          <div className="theme-section-content">
            <div className="theme-slider-group">
              <div className="color-preview-row">
                <div className="color-preview-label">Preview:</div>
                <div className="color-preview" style={{ backgroundColor: 'var(--defaultColor)' }} />
              </div>
              <label>
                Hue: { defaultHue }°
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={ defaultHue }
                  onChange={handleCSSVarChange(setDefaultHue, '--defaultColor-h')}
                />
              </label>
              <label>
                Saturation: { defaultSaturation }%
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={ defaultSaturation }
                  onChange={handleCSSVarChange(setDefaultSaturation, '--defaultColor-s', '%')}
                />
              </label>
              <div className="theme-note">
                Lightness is locked at <strong>88%</strong> to preserve theme calculations.
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="theme-section">
        <h3 onClick={() => setFontblueExpanded(!fontblueExpanded)}>
          Accent / Button Color { fontblueExpanded ? '▲' : '▼' }
        </h3>
        {fontblueExpanded && (
          <div className="theme-section-content">
            <div className="theme-slider-group">
              <div className="color-preview-row">
                <div className="color-preview-label">Preview:</div>
                <div className="color-preview" style={{ backgroundColor: 'var(--fontblue)' }} />
              </div>
              <label>
                Hue: { fontblueHue }°
                <input
                  type="range"
                  min="0"
                  max="360"
                  value={ fontblueHue }
                  onChange={handleCSSVarChange(setFontblueHue, '--fontblue-h')}
                />
              </label>
              <label>
                Saturation: { fontblueSaturation }%
                <input
                  type="range"
                  min="13"
                  max="100"
                  value={ fontblueSaturation }
                  onChange={handleCSSVarChange(setFontblueSaturation, '--fontblue-s', '%')}
                />
              </label>
              <label>
                Lightness: { fontblueLightness }%
                <input
                  type="range"
                  min="13"
                  max="100"
                  value={ fontblueLightness }
                  onChange={handleCSSVarChange(setFontblueLightness, '--fontblue-l', '%')}
                />
              </label>
              <div className="theme-note">
                (Min lightness set to 13% to preserve hover contrast)
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeSwitcher;