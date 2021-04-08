import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, withRouter } from "react-dom";
import HomeIcon from "@material-ui/icons/Home";
import {LinkContainer} from 'react-router-bootstrap'
import resumeData from "../../utils/resumeData";
import Cust_button from "../Buttons/Button";
import TelegramIcon from '@material-ui/icons/Telegram';
import './Header.css';
const Header = (props) => {
  const pathName  = props?.location?.pathname;
  return (<>
        <Navbar collapseOnSelect expand="lg"  sticky="top" className="header">
     <LinkContainer  to="/">
        <Nav.Link  className="nav_link">
    <Navbar.Brand className="header_home">
          <img src="https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/sign.png" width="150px" height="50px"></img>
        </Navbar.Brand>
        </Nav.Link></LinkContainer>
        
    
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
          <LinkContainer  to="/" 
            className={pathName == "/" ? "header_link_active" : "header_link"}>
    <Nav.Link>Resume</Nav.Link>
</LinkContainer>
          <LinkContainer to="/portfolio"
            className={pathName  == "/portfolio" ? "header_link_active" : "header_link"}>
    <Nav.Link>Portfolio</Nav.Link>
</LinkContainer>
          
    </Nav>
    
    <div className="header_right">
            {Object.keys(resumeData.socilas).map(key =>(
              <a href={resumeData.socilas[key].link} target="_blank">{resumeData.socilas[key].icons}</a>
            ))}
            <Cust_button text={"Hire Me"} icon={<TelegramIcon />} />
          </div>
  </Navbar.Collapse>
</Navbar>
    </>
  );
};
export default Header;
