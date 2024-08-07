import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navList } from "../data/Data";
import SocialIcons from "./SocialIcons";

export default function Header() {
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (itemId) => {
    setActiveDropdown(itemId);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user data from localStorage
    alert('Logged out successfully!');
    navigate('/login'); // Navigate to login page
  };

  return (
    <>
      <div className="container-fluid bg-dark px-0">
        <div className="row gx-0">
          <div className="col-lg-3 bg-dark d-none d-lg-block">
            <Link
              to="/"
              className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
            >
              <h1 className="m-0 text-primary text-uppercase">Bytelearn</h1>
            </Link>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
              <Link to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 text-primary text-lowercase">Bytelearn</h1>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                onClick={() => setNavbarCollapse(!navbarCollapse)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={
                  navbarCollapse
                    ? "navbar-collapse show"
                    : "collapse navbar-collapse"
                }
              >
                <div className="navbar-nav mr-auto py-0 d-flex align-items-center">
                  {navList.map((item, index) => (
                    <div key={index} className="nav-item">
                      {item.subItems ? (
                        <div
                          className="nav-item dropdown"
                          onMouseEnter={() => handleMouseEnter(item.id)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link className="nav-link dropdown-toggle">
                            {item.text}
                          </Link>
                          <div
                            className={`dropdown-menu rounded-0 m-0 ${
                              activeDropdown === item.id ? "show" : ""
                            }`}
                          >
                            {item.subItems.map((sub, subIndex) => (
                              <Link to={sub.path} className="dropdown-item" key={subIndex}>
                                {sub.text}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link to={item.path} className="nav-item nav-link">
                          {item.text}
                        </Link>
                      )}
                    </div>
                 ))}
                  <button
                    onClick={handleLogout}
                    className="nav-item nav-link btn"
                    style={{
                      color: '#f1c40f', // Chrome yellow color
                      background: 'none', // No background
                      //border: 'none', // No border
                      // padding: '0.5rem 1rem',
                      textDecoration: 'none',
                      fontSize: '1rem', // Adjust font size if needed
                      // display: 'flex', // Align with other items
                      alignItems: 'center' // Center vertically
                    }}
                  >
                    Logout
                  </button>
                </div>
                <SocialIcons />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}







