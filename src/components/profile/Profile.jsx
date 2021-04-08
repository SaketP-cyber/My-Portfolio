import React from "react";
import "./profile.css";
import "../../App.css";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import Timeline1, { CustomeTimeline } from "../Timeline/Timeline";
import { Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import Cust_button from "../Buttons/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import { keys } from "@material-ui/core/styles/createBreakpoints";
import { RandomReveal } from "react-random-reveal";

const CustomeTimelineItems = ({ title, text, link }) => {
  return (
    <>
      <TimelineItem className="otherTimeline">
        <CustomeTimeline />
        <TimelineContent className="timeline_content">
          {link ? (
            <Typography className="tileItem_text">
              <span>{title}:</span>
              <a href={link} target="_blank">
                {text}
              </a>
            </Typography>
          ) : (
            <>
              <Typography className="tileItem_text">
                <span>{title}:</span>
                {text}
              </Typography>
            </>
          )}
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

const Profile = () => {
  return (
    // https://www.codechef.com/users/purwar
    <>
      <div className="profile container_shadow">
        <div className="profile_name">
          <Typography className="name"><RandomReveal
          isPlaying
          duration={5}
          speed={10}
          revealDuration={100}
          characters={resumeData.name}
          onComplete={() => [false, 5000]}
        /></Typography>
          <Typography className="title">Web Developer| 3⭐⭐⭐ <a href="https://www.codechef.com/users/purwar" target="__blank" style={{textDecoration:"none",color:"rgb(99, 99, 99)"}}>Codechef</a></Typography>
        </div>
        <div className="profile_img">
          <img
          // http://tavonline.net/html/mat/default/images/profile.jpg
            src="https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/Untitled-4.jpg"
            alt="pic"
          />
        </div>
        <div className="profile_info">
          <Timeline1 icon={<PersonOutlineIcon />}>
            <CustomeTimelineItems title="Name" text={resumeData.name} />
            <CustomeTimelineItems title="College" text={resumeData.college} />
            <CustomeTimelineItems title="DOB" text={resumeData.birthaday} />
            <CustomeTimelineItems
              title="Email"
              text={resumeData.email + "📧"}
            
              
            />
            
          </Timeline1>
          <div className="container_btn">
          <a href="https://drive.google.com/file/d/1-tuinTsueONw0HSsYRg4brQBFuSKgLpT/view?usp=sharing" target="__blank" > <Cust_button text={"See My Resume"} icon={<GetAppIcon />} /></a>
           
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Profile;
