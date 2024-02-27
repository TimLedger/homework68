import React, { useState, useEffect } from 'react';
import { IoBatteryHalf, IoWifi } from "react-icons/io5";
import './Header.css';

const Header: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const time = currentTime.getHours().toString().padStart(2, '0') + ':' + currentTime.getMinutes().toString().padStart(2, '0');

  return (
    <header className='header'>
      <div className="header-inner">
        <div className="header-left">
          <span className="time">{time}</span>
        </div>
        <div className="header-center">
          <div className="camera"></div>
        </div>
        <div className="header-right">
          <div className="header-icons"><IoWifi /><IoBatteryHalf /></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
