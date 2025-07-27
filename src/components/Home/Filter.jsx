import React, { useState, useEffect } from 'react';
import './Filter.css';
import Hamburger from '../../assets/icon/Hamburger.svg';

const continents = ['All', 'Asia', 'Europe',];

const Filter = ({ selected, onChange }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setShowDropdown(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleToggle = () => setShowDropdown((prev) => !prev);

  return (
    <div className="continent-filter-wrapper">
      {isMobile ? (
        <div className="mobile-filter">
          <img src={Hamburger} alt="Menu" className="hamburger-icon" onClick={handleToggle} />
          {showDropdown && (
            <div className="dropdown-menu show">
              {continents.map((region) => (
                <div
                  key={region}
                  className={`dropdown-item ${selected === region ? 'active' : ''}`}
                  onClick={() => {
                    onChange(region);
                    setShowDropdown(false);
                  }}
                >
                  {region}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="continent-filter">
          {continents.map((region) => (
            <div
              key={region}
              className={`filter-item ${selected === region ? 'active' : ''}`}
              onClick={() => onChange(region)}
            >
              {region}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
