import React from "react";
import "./resume.css";
import resumeData from "../../utils/resumeData";
import Timeline1, {
  CustomeTimeline,
  TimelineItem,
  TimelineContent,
} from "../../components/Timeline/Timeline";
import SchoolIcon from "@material-ui/icons/School";
import { Container, Grid, Grow, Icon, TextField, Typography } from "@material-ui/core";
import WorkIcon from "@material-ui/icons/Work";
import Paper from "@material-ui/core/Paper";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Slide from 'react-reveal/Slide';
import Cust_button from "../../components/Buttons/Button"
function Resume() {
  return (
    <>
      <Grid container className="section p_45" >
        <Grid item className="section_title m_30 pt_45">
          <span></span>
          <h6 className="section_titleText ">About Me</h6>
        </Grid>
        <Slide top>
        <Grid xs={12}>
          <Typography variant="body2" className="aboutMe">
            {resumeData.about}
          </Typography>
        </Grid>
        </Slide>
        
      </Grid>

      <Grid container className="section p_45">
        <Grid item className="section_title m_30">
          <span></span>
          <h6 className="section_titleText ">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
          <Grid item xs={12} md={6}>
          <Slide left>
          <Timeline1 title="Education History" icon={<SchoolIcon />}>
                {resumeData.education.map((exp) => (
                  <TimelineItem>
                    <CustomeTimeline />
                    <TimelineContent>
                      <Typography className="timelineTitle">
                        {exp.title}
                      </Typography>
                     
                      <Typography variant="body1" className="timelineDesp">
                        {exp.palce}
                      </Typography>
                      <Typography variant="body1" className="timelineDate">
                        {exp.date}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline1>
        </Slide>
              
            </Grid>
            

            
            <Grid item xs={12} md={6}>
            <Slide right>
              <Timeline1 title=" Working Experience" icon={<WorkIcon />}>
                {resumeData.expreience.map((exp) => (
                  <TimelineItem>
                    <CustomeTimeline />
                    <TimelineContent>
                      <Typography className="timelineTitle">
                        {exp.title}
                      </Typography>
                      <Typography variant="caption" className="timelineDate">
                        {exp.date}
                      </Typography>
                      <Typography variant="body2" className="timelineDesp">
                        {exp.desp}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline1>
              </Slide>
            </Grid>
            
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section p_45">
        <Grid item className="section_title m_30">
          <span></span>
          <h6 className="section_titleText ">My Achivments and Certificates</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grow Fade in={2000}>
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon"><a href={service.link} target="__blank" style={{textDecoration:"none",color:"rgb(99, 99, 99)"}}>{service.icon}</a></Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_desp" variant="body2">
                    {service.descp}
                  </Typography>
                </div>
              </Grid>
              </Grow>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container className="section p_45 bggray p_50">
        <Grid item className="section_title m_30">
          <span></span>
          <h6 className="section_titleText ">My Skills</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container  justify="space-around" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={4} lg={4}>
                <Paper elevation={0} className="skill">
                  <Typography variant="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((despc) => (
                    <Typography variant="body2" className="skill_desp">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {despc}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <Grid container className="section pt_45 p_45" spacing={6}>
        {/* right contact form */}
        <Grid item xs={12} lg={7}>
        <Grid item className="section_title m_30">
          <span></span>
          <h6 className="section_titleText ">Contact Form</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <TextField fullWidth name="name" label="Name" />
          </Grid>
          <Grid item xs={12} sm={6}>
          <TextField fullWidth name="email" label="Email" />
          </Grid>
          <Grid item xs={12}>
          <TextField fullWidth name="message" label="Message" multiline rows={3} />
          </Grid>
          <Grid item xs={12}>
            <Cust_button text="Submit"/>
          </Grid>
          </Grid>
        </Grid>
        </Grid>
        {/* left contact form */}
        <Grid item xs={12} lg={5}>
        <Grid item className="section_title m_30">
          <span></span>
          <h6 className="section_titleText ">Contact Info</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container >
            <Grid item  xs={12}>
              <Typography className="contact_item">
                <span>Address: </span>{resumeData.addresss}
              </Typography>
            </Grid>
            <Grid item  xs={12}>
              <Typography className="contact_item">
                <span>Phone: </span>{resumeData.Phone}
              </Typography>
            </Grid>
            <Grid item xs={12} >
              <Typography className="contact_item">
                <span>Email: </span>{resumeData.email}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="social_cont">
          <Grid item className="socila_item"> 
          {Object.keys(resumeData.socilas).map(key =>(
              <a href={resumeData.socilas[key].link} target="_blank">{resumeData.socilas[key].icons}</a>
            ))}
          </Grid>
         
          </Grid>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
