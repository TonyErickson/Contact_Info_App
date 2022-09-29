import React, { useEffect, useState}  from 'react';
import {Link, useLocation} from 'react-router-dom';
import './header.css';

const Header = () => {
    const [activeTab, setActiveTab]= useState("Home");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/"){
            setActiveTab("Home");
        } else if (location.pathname === "/add") {
            setActiveTab ("AddContact");
        } else if (location.pathname === "/reviewForm") {
            setActiveTab ("ReviewForm")
        } else if (location.pathname === "/about") {
            setActiveTab ("About")
        }
    }, [location]);
    return (
        <div className="header">
            <p className="logo"> Contact App </p>
                <div className='header-right'>
                    <Link to="/">
                        <p className={`${activeTab === "Home" ? "active" : ""}`} 
                        onClick={() => setActiveTab("Home")}
                        >
                            Home
                        </p>
                    </Link>
                    <Link to="/add">
                        <p className={`${activeTab === "AddContact" ? "active" : ""}`} 
                        onClick={() => setActiveTab("AddContact")}
                        >
                            Add Contact
                        </p>
                    </Link>
                    <Link to="/reviewForm">
                        <p className={`${activeTab === "ReviewForm" ? "active" : ""}`} 
                        onClick={() => setActiveTab("ReviewForm")}
                        >
                            Leave A Review
                        </p>
                    </Link>
                    <Link to="/about-us">
                        <p className={`${activeTab === "About" ? "active" : ""}`} 
                        onClick={() => setActiveTab("About")}
                        >
                            About
                        </p>
                    </Link>
                    
                </div>
        </div>
    );

};

export default Header;