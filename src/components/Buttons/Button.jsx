import React from "react";
import './Button.css';
import Button from "@material-ui/core/Button";
const Cust_button = ({icon,text}) => {
  return (
    <Button
      className="cust_btn"
      endIcon={icon ? <div className="icon_container">{icon}</div> : null}
    ><span className='btn_txt'>{text}</span></Button>
  );
};

export default Cust_button;
