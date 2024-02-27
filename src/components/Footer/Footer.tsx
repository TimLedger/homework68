import React from 'react';
import { TbSmartHome } from "react-icons/tb";
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <span className='button-home'><TbSmartHome /></span>
            </div>
        </footer>
    );
};

export default Footer;