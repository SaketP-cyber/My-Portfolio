import { CardMedia,CardActionArea, Dialog, DialogActions, DialogContent, DialogTitle, Grid,Grow,Tab,Typography } from '@material-ui/core'
import React,{useState} from 'react'
import "./Portfolio.css"
import resumeData from "../../utils/resumeData"
import Tabs from '@material-ui/core/Tabs';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ImageGallery from "../../components/ImageGallery/Imagegallery"
import Roll from 'react-reveal/Roll';
function Portfolio() {
    const [tabValue, settabValue] = useState("All");
    const [ProjectDialog,setProjectDialog]=useState(false);
    return (
        <Grid container className="section p_45 pt_45">
             <Grid item className="section_title mb_20 ">
          <span></span>
          <h6 className="section_titleText ">Portfoilio</h6>
        </Grid>

        <Grid item xs={12}>
            <Tabs value={tabValue} indicatorColor='white' className="cust_tab" onChange={(event,newValue)=>settabValue(newValue)}>
                <Tab label ="All" value="All" className={(tabValue=="All")? "cust_item active" : "cust_item" } />
                {[... new Set(resumeData.project.map(item=>item.tag))].map(tag=>(
                    <Tab label={tag} value={tag} className={tabValue==tag ? "cust_item active" : "cust_item" }/>
                ))}
            </Tabs>

        </Grid>
        <Grid item xs={12}>
            <Grid container spacing={3}>
                {resumeData.project.map(e=>(
                    <>
                    {tabValue==e.tag || tabValue=="All" ? (
                        <Grid item xs={12} md={4} sm={6} >
                   
        
                    <Roll top>
                    {/* <Card className="cust_Card" onClick={()=>setProjectDialog(e)}>
                        <CardActions>
            
                        <CardMedia className="custCard_img" image={e.image} title={e.title}/>
                            <CardContent>
                                <Typography variant ="boby2" className="cust_CardTitle">{e.title}</Typography><br></br>
                                <Typography variant="caption" className="cust_CardDescp">{e.caption}</Typography>
                            </CardContent>
                        </CardActions>
                    </Card> */}
                    <Card className="cust_Card" onClick={()=>setProjectDialog(e)}>
      <CardActionArea>
        <CardMedia
          className="custCard_img" image={e.frntimg} title={e.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"  className="cust_CardTitle">
          {e.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {e.caption}
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
                    </Roll>
                   
                </Grid>
                    ) : null}
                   
                    </>
                    ))}
            </Grid>
        </Grid>
        <Dialog className="project_dia" open={ProjectDialog} onClose={()=>setProjectDialog(false)}
        maxWidth={"md"} >
            <DialogTitle onClose={()=>setProjectDialog(false)} className="Proj_title">{ProjectDialog.title}</DialogTitle>
           <DialogContent style={{height:"80vh"}}>
            {ProjectDialog.images && (
                <ImageGallery images={ProjectDialog.images}/>
            )}
            <Typography className="Proj_desp">{ProjectDialog.description}</Typography>

            </DialogContent>
            <DialogActions className="Proj_action">
                {ProjectDialog ?.links ?. map((link)=>(
                    <a href={link.link} target="_blank" className="Proj_icon">{link.text}</a>
                ))}
            </DialogActions>
        </Dialog>
        </Grid>
    )
}

export default Portfolio;
