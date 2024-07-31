// import React, { useContext } from 'react';
// import { UserContext } from '../../../App';
// import { hanldeSignOut } from '../../Login/LoginMain/LoginManager';
// import Pop from '../Pop/Pop.js';
// import { AuthContext } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { useEffect } from 'react';
import './Navbar.css';


const Navbar = () => {
    // const { user } = useContext(AuthContext);
    // const { user } = useContext();

    const [isSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        })
    }, [])
    return (
        <nav className={`navbar navbar-expand-lg navbar-light ${isSticky ? "stickynav" : "normalnav"}`} expand="lg">
            <Toaster />
            <div className="container-fluid">
                <div className="navbar-heading">
                    <h3>
                        <Link className="navbar-h" to="/">MentorMe</Link>
                    </h3>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mb-2 mb-lg-0 ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active me-3" aria-current="page" href="/">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link me-3" href="#aboutContent">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            {/* <a className={`nav-link me-3 text-white ${isSticky ? "textDark" : "textWhite"}`} href="#BlogContent">BLOG</a> */}
                            <a className="nav-link me-3 textDark" href="#MentorContent">MENTORS</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link me-3" href='#ContactPage'>CONTACT</a>
                            {/* <NavLink activeClassName="ContactPage" className="nav-link me-3" to="#ContactPage">CONTACT</NavLink> */}
                        </li>

                        

                        {/* <li className="nav-item">
                            <a className="nav-link me-3 textDark" href="#serviceContent" >DENTAL SERVICE</a>
                        </li> */}

                        {/* <li className="nav-item">
                            <a className="nav-link me-3 textDark" href="#reviewsContent">REVIEWS</a>
                        </li> */}

                        <div className="dropdown">

                            <li className="nav-item">
                                {/* user?.email ?
                                    // <Pop />
                                    : */
                                    <span>
                                        <Link className={`nav-link me-3 text-dark ${isSticky ? "textDark" : "textBLue"}`} to="/login">LOGIN</Link>
                                    </span>
                                }
                            </li>

                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;