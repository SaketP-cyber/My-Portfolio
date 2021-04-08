import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import WorkIcon from "@material-ui/icons/Work";
import "./TimeLine.css";
import { Typography } from "@material-ui/core";
const Timeline1 = ({ title, children ,icon}) => {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_firstitem"}>
        <TimelineSeparator>
          <TimelineDot className={"dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h6" className={"timeline_header"}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}

     
    </Timeline>
  );
};
export const CustomeTimeline = () => {
    return (<>
  <TimelineSeparator className={"seperator_padding"}>
    <TimelineDot variant={'outlined'} className={"dot_header_time"} />
    <TimelineConnector />
  </TimelineSeparator>
  </>);
};
export default Timeline1 ;
export {TimelineItem,TimelineContent};
