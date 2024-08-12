'use client';

import React, { useState, useRef } from 'react';
import './Dropdown.css';

const Dropdown = ({ title, items, onItemSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const timerRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timerRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timerRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 2000); // 2 seconds delay before hiding
    };

    return (
        <div className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className="dropdown-button">
                {title}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index} className="dropdown-item">
                            <a href="#" onClick={() => onItemSelect(item.label)}>{item.label}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
