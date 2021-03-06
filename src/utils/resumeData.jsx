import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WebIcon from '@material-ui/icons/Web';
import YouTubeIcon from '@material-ui/icons/YouTube';
// npm install --save-dev @iconify/react @iconify-icons/simple-icons
import GetAppIcon from '@material-ui/icons/GetApp';

export default {
    name:'Saket Kumar Purwar 🧑‍ 🧑‍',
    
    college:" NIT Kurukshetra 🏫",
    birthaday:' 02nd April 2000 🎂',
    email:' Kumarpurwar@gmail.com',
    addresss:'Balkhandi Naka,Banda',
    Phone:"9161313973 ☎️",
    socilas:{
        fb:{
            link:'https://www.facebook.com/',
            text:'MyFacebook',
            icons:<FacebookIcon/>
        },
        twitter:{
            link:'https://twitter.com/home?lang=en',
            text:'MyTwitter',
            icons:<TwitterIcon/>
        },
        github:{
            link:'https://github.com/SaketP-cyber',
            text:'MyGithub',
            icons:<GitHubIcon/>
        },
        linkedin:{
            link:'https://www.linkedin.com/in/saket-kumar-purwar-757487196/',
            text:'MyLinkedIn',
            icons:<LinkedInIcon/>
        }
    },
    about:"A keen learner having the passion to do work with good problem solving skills. My strengths include a deep understanding of technology, creative thinking, C++, Data Structure & Algorithms and team building. Besides these qualities I have good coding abilities, communication skills, and can handle tasks individually or in a group.",
  expreience:[
{
    title:"Internship at Verzeo",
    date:"September 2020-October 2020",
    desp:"It is two months long training with one minor and one major project."
},
{
    title:"Member at Club",
    date:"October 2019-August 2020",
    desp:"I had been member of EMR Club at NIT Kurukshetra"
}
  ],
  
    education:[
        {
        title:"Graduation(Electrical Enginerring)",
        date:"Aug 2019-May 2023",
        palce:"NIT Kurukshetra",
        
    },
    { title:"Class 12th",
    date:"2017-2018",
    palce:"Sarvodya Senior Secondary School,Kota",
    },
    {
        title:"Class 10th",
        date:"2015-2016",
        palce:"S.T Mary's Senior Secondary School,Banda(U.P)",
    },
    ],
    services:[
        {title:"Introduction To ML",
    descp:"It is a basic course on Machine Learning Using Python.",
    icon:<GetAppIcon/>,
    link:"https://drive.google.com/file/d/1JF3-L7dRyjAi_iL5xkBAHBwe2VRzLRx5/view?usp=sharing",
    },
    {title:"Javascript",
    descp:"Cerificate from Hackerrank on Basic Javascript.",
    icon:<GetAppIcon/>,
    link:"https://drive.google.com/file/d/1o70V51U6j6WIdMtjdzmCRd708JgBDJfl/view?usp=sharing",
    },
    {title:"Problem Solving",
    descp:"Cerificate from Hackerrank on Problem Solving beginner.",
    icon:<GetAppIcon/>,
    link:"https://drive.google.com/file/d/1GqstOMUbhMARbagtgvd55eqB-EDB8NO3/view?usp=sharing",
    },
    {title:"Industrial Training",
    descp:"It is a two wekk long industrial training on basic electrical instruments",
    icon:<GetAppIcon/>,
    link:"https://drive.google.com/file/d/158DkZOIWUn7lQRe20RkbpVSyBr5Ombbp/view?usp=sharing"
    },
    
    ],
    skills:[
        {
            title:"Languages",
            description:["C++","Python","Javascript"]
        },
        {
            title:"Front-end",
            description:["HTML","CSS","Javascript","ReactJs"]
        },
        {
            title:"Source control",
            description:["Git","Github"]
        }
        ,
        {
            title:"Graphic Design",
            description:["Photoshop","Illustrator"]
        }
    ],
    project:[
        {
            tag:"PhotoShop",
            title:"Editing",
            frntimg:"data:image/jpeg;base64,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",
            images:["https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/Untitled-1.jpg",
            "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/light_bulb_by_vvolny_d1s0ob2-pre.jpg",
        "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/photo-1536294738309-2fc595e788fb.jpg",
        "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/street-381227_1920.jpg"
        ],

            description:"These are some of the pictures that i have made using photoshop. 👷‍♂️",
            caption:"Editing with Photoshop",
           
        },
        
        {
            tag:"Web Devlopment",
            title:"Notes App",
            frntimg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWTCsLJ7Ordn-gPNMDW7cWLvZZd0tw7APzJQ&usqp=CAU",
            images:["https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/1.PNG",
            "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/2.PNG",
        "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/3.PNG",
        
        ],

            description:"It is a simple javascript based notes app using local storage to store information feed by user 💻💻💻",
            caption:"Make Your Notes 🗒️",
            links:[
                {link:"https://saketp-cyber.github.io/My-Notes-App/",text:"Live Demo"},
               
            ]
        },
        {
            tag:"PhotoShop",
            title:"Illustrator",
            frntimg:"https://pluralsight.imgix.net/paths/path-icons/illustrator-6035a970d1.png",
            images:["https://github.com/SaketP-cyber/Personalpics/blob/main/Hari-logo.png?raw=true",
          
        ],

            description:"Its simple logo made using Illustrator for my Group. 🧑‍🎨",
            caption:"Logo Design",
           
        },
        {
            tag:"Web Devlopment",
            title:"News App",
            frntimg:"data:image/jpeg;base64,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",
            images:["https://raw.githubusercontent.com/SaketP-cyber/Personalpics/e6c9b821e38b1720d30d8796a5f2f72c5cb8de36/5.PNG",
            "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/e6c9b821e38b1720d30d8796a5f2f72c5cb8de36/6.PNG",
        
        ],

            description:"It is simple News App that fetches information from news Api and then populate on website 📺📺📺",
            caption:"Update Yourself 📰",
            links:[
                {link:"https://saketp-cyber.github.io/News/",text:"Live Demo"},
              
            ]
        },
        {
            tag:"Web Devlopment",
            title:"Todo App",
            frntimg:"data:image/jpeg;base64,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",
            images:[
            "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/9.PNG",
        "https://raw.githubusercontent.com/SaketP-cyber/Personalpics/main/8.PNG",
        
        ],

            description:"It is my first Javascript project.Its simple todo list in whihch you can insert tasks,mark as complete,delete the tasks. 📓📓📓",
            caption:"Create Your Todo ✅",
            links:[
                {link:"https://github.com/SaketP-cyber/todo-list",text:"Live Demo"},
              
            ]
            
        },
        {
            tag:"Web Devlopment",
            title:"Portfolio",
            frntimg:"https://miro.medium.com/max/2000/1*EVqCcmCPgpNKxU1wzcTHgw.png",
            images:["https://i.pinimg.com/originals/e9/02/2c/e9022cd0abbf53461b6cdcafa10e4674.jpg",
        
        ],

            description:"Its the same project which you are using 😄😄😄",
            caption:"My Portfolio ✏️",
            
        },
        
    ]
}

