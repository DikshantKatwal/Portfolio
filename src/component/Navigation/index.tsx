/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import logo from '/dk_logo.png'
import { Link } from 'react-router-dom';
import "../../../src/static/nav.css";
interface NavigationProps {
    completedSteps: any;
    handleStepChange: (values: any) => void;
    toggleNav: (values: any) => void;
    isNavVisible:any;
}


const Navigation: React.FC<NavigationProps> =({
    handleStepChange,
    isNavVisible,
    toggleNav
}) => {

    

   

  return (
    <>
     <div className={`nav-container ${isNavVisible ? 'show' : ''}`}>
                    <div className='nav-top-container'>
                        <div className='logo'>
                        <img src={logo} className='logo-img' alt="Logo" />
                        </div>
                        <div className='nav-content-box'>
                            <div className='nav-content'>
                                <Link to={''} onClick={() => handleStepChange(0)}>
                                    Home
                                </Link>
                            </div>
                            <div className='nav-content'>
                                
                                <Link to={''} onClick={() => handleStepChange(1)}>
                                Details
                                </Link>
                            </div>
                            <div className='nav-content'>
                            <Link to={''} onClick={() => handleStepChange(2)}>
                                Skills
                                </Link>
                            </div>
                            <div className='nav-content'>
                            <Link to={''} onClick={() => handleStepChange(3)}>
                                Contact
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='nav-bottom-container'>

                    </div>
                </div>

                <div className='nav-icon'>
                    <a onClick={toggleNav} className='navigation-icon'>
                        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 6H12H19M5 12H19M5 18H19" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </a>
                    <div className='logo-container-icon'>
                        <img src={logo} className='logo-img' alt="Logo" />
                    </div>
                </div>
    </>
  )
}

export default Navigation