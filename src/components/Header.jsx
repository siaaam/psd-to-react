import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const elm = useRef();
  function handleScroll(evt) {
    const scrollValue = window.scrollY;
    if (scrollValue >= 600) {
      elm.current.classList.add('nav-bg');
      document.querySelector('.scrollToTopIcon').classList.add('visible');
    } else {
      elm.current.classList.remove('nav-bg');
      document.querySelector('.scrollToTopIcon').classList.remove('visible');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light stciky-top" ref={elm}>
      <div className="container ms">
        <a className="navbar-brand" href="#">
          <img src="img/main-logo.png" alt="main-logo" className="img-fluid" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                aria-current="page"
                to="banner-part"
              >
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                to="about-part"
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                to="video-part"
              >
                VEDIO
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                to="section-part"
              >
                EXPERTISE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                to="team"
              >
                TEAMS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                to="project"
              >
                WORKS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                to="team-two"
              >
                {' '}
                PEOPLE SAY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                offset={-50}
                spy={true}
                smooth={true}
                className="nav-link"
                to="contact"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
