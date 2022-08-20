import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import git from '../assets/img/social-github.svg';
import linkedin from '../assets/img/linkedin.svg';
import logo from '../assets/img/logo.svg';




export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] =useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <span className="navbar-toggler-icon"></span> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skils' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            {/* <hr className="line"/> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/andrearestrepox" target="_blank"><img src={git} alt="" /></a>
                <a href="https://www.linkedin.com/in/andrearestrepox/"  target="_blank"><img src={linkedin} alt="" /></a>
            </div>
            <button className="nbb" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );



}

export default NavBar;