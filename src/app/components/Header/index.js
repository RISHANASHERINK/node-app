'use client';
import { useRouter } from 'next/navigation'
import React, { useState, useEffect } from 'react';
import './Header.css';
import './Content.css';
import Dropdown from '../Dropdown';


// Descriptions with both main and sub descriptions
const descriptions = [
    { main: "Cloud Managed Like a Pro.", sub: "Effortless management of cloud services." },
    { main: "E-commerce Performance Guaranteed.", sub: "Boost your online store’s performance." }
];


const Header = ({ onItemSelect }) => {
    const menItems = [
        { href: '#men-clothing', label: 'cloud management' },
        { href: '#men-footwear', label: 'cloud security' },
        { href: '#men-accessories', label: 'cloud migration' },
    ];

    const womenItems = [
        { href: '#women-clothing', label: 'cloud management' },
        { href: '#women-footwear', label: 'cloud security' },
        { href: '#women-accessories', label: 'cloud migration' },
    ];

    // State to hold the current description (both main and sub)
    const [currentDescription, setCurrentDescription] = useState(descriptions[0]);

    // useEffect to change descriptions periodically
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDescription(prev => {
                const currentIndex = descriptions.indexOf(prev);
                const nextIndex = (currentIndex + 1) % descriptions.length;
                return descriptions[nextIndex];
            });
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, []);
    const router = useRouter()
    return (
        <>
            <header className="header">
                

                <div className="logo">
                    <img src="images/2cloud.webp" alt="Myntra Logo" />
                </div>
                <nav className="nav-links">
                    <Dropdown title="Cloud Solutions" items={menItems} onItemSelect={onItemSelect} />
                    <Dropdown title="Managed Services" items={womenItems} onItemSelect={onItemSelect} />
                    <Dropdown title="Resources" items={womenItems} onItemSelect={onItemSelect} />
                    <Dropdown title="About Us" items={womenItems} onItemSelect={onItemSelect} />
                    <Dropdown title="Contact Us" items={womenItems} onItemSelect={onItemSelect} />
                </nav>
                <div className="search-bar">
                    <input type="text" placeholder="Search for products, brands and more" />
                    <button type="submit">Search</button>
                </div>
                <div className="user-actions">
                    <a href="#profile"><i className="fas fa-user"></i> Intership</a>
                    <a href="#wishlist"><i className="fas fa-heart"></i> Free consultation</a>
                    
                </div>
            </header>

            <section className="content-section">
                <div className="description">
                    <h2>{currentDescription.main}</h2>
                    <p>{currentDescription.sub}</p>
                </div>
                <div className="button-container">
    <button 
        className="open-page-button" 
        onClick={() => router.push("/test")}
    >
        Talk to our Experts
    </button>
    
</div>


                <div className="moving-image">
                    <img src="/images/robot.webp" alt="Moving Robot" />
                </div>

                <div className="cloud-logos">
                    <img src="/images/azure.webp" alt="Microsoft Azure" />
                    <img src="/images/aws.webp" alt="AWS" />
                    <img src="/images/google-cloud.webp" alt="Google Cloud" />
                    <img src="/images/magento.webp" alt="Magento" />
                </div>
            </section>
        </>
    );router
};

export default Header;
