import { Typography } from '@material-ui/core';
import React from 'react'
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
        <div className="footer_left">
            <Typography className="name">Saket Kumar Purwar</Typography>
        </div>
           
        <div className="footer_right">
            <Typography className="copyright">Designed and Developed by<a href="/portfolio" target="_blank">Saket</a></Typography>
        </div>
           
        </div>
    )
}

export default Footer;
