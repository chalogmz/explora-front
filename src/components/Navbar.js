import React from 'react'
import '../assets/css/Navbar.css'

import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <div>
            <div className="nav-container">
                <div className="nav-logo">
                    <Link to="/" exact="true" style={{ textDecoration: 'none' }}>
                        <img src="https://res.cloudinary.com/dmaiqkpom/image/upload/v1652044572/LOGO_EN_CASA-1_mtte39.png" className="logo-nav" alt="logo" />
                    </Link>
                </div>
                <div className="nav-menu">
                    <div className="nav-op">
                        <Link to="/" exact="true" style={{ textDecoration: 'none' }}>
                            <div className="nav-option">
                                <p style={{ color: 'black' }}>Inicio</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-op">
                        <Link to="/experimenta" exact="true" style={{ textDecoration: 'none' }}>
                            <div className="nav-option">
                                <p style={{ color: 'black' }}>Experimenta</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-op">
                        <Link to="/" exact="true" style={{ textDecoration: 'none' }}>
                            <div className="nav-option">
                                <p style={{ color: 'black' }}>Conéctate</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-op">
                        <Link to="/" exact="true" style={{ textDecoration: 'none' }}>
                            <div className="nav-option">
                                <p style={{ color: 'black' }}>Prográmate</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-op">
                        <Link to="/conocenos" exact="true" style={{ textDecoration: 'none' }}>
                            <div className="nav-option">
                                <p style={{ color: 'black' }}>Conócenos</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-op">
                        <Link to="/" exact="true" style={{ textDecoration: 'none' }}>
                            <div className="nav-option">
                                <p style={{ color: 'black' }}>Sucríbete</p>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-op">
                        <Link to="/" exact="true" style={{ textDecoration: 'none' }}>
                            <div className="nav-option">
                                <span class="iconify" data-icon="bi:search" style={{ color: 'black' }}></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="nav-line"></div>
        </div>
    )
}

export default Navbar;