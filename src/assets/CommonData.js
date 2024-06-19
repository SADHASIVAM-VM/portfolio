//Porfolio data
import project1 from '../assets/images/project-1.jpg'
import project2 from '../assets/images/project-2.png'
import project3 from '../assets/images/project-3.jpg'
import project4 from '../assets/images/project-4.png'
import project5 from '../assets/images/project-5.png'
import project6 from '../assets/images/project-6.png'
import project7 from '../assets/images/project-7.png'
import project8 from '../assets/images/project-8.jpg'
import project9 from '../assets/images/project-9.png'


export const Portfolios =[
{id:1,
img:project1,
title:"title",
link:"#"},
{id:2,
img:project2,
title:"title",
link:"#"},
{id:3,
img:project3,
title:"title",
link:"#"},
{id:4,
img:project4,
title:"title",
link:"#"},
{id:5,
img:project5,
title:"title",
link:"#"},
]

// Profile Data
import mail from '../assets/svg/7101527_gmail_email_mail_icon.svg'
import phone from '../assets/svg/6214500_handset_logo_telephone_viber_icon.svg'
import location from '../assets/svg/5548705_direction_gps_location_map_navigation_icon.svg'
import dob from '../assets/svg/1622828_calendar_date_event_month_plan_icon.svg'

export const ProfileData=[
    {
        id:1,
        name:"E-Mail",
        mail:"sadha4747@gmail.com",
        img:mail
    },
    {
        id:2,
        name:"Phone",
        subname:8248586299,
        img:phone
    },
    {
        id:3,
        name:"Date of Birth",
        subname:"May 08, 2003",
        img:dob
    },
    {
        id:4,
        name:"Location",
        subname:"Chennai, Tamilnadu, India",
        img:location
    },
]

// Navbar Data
export const NavBarData =[
    {
        id:1,
        menu:"About",
        link:'/'
    },
    {
        id:2,
        menu:"Resume",
        link:'/resume'
    },
    {
        id:3,
        menu:"Portofolio",
        link:'/portfolio'
    },
    {
        id:4,
        menu:"Contact",
        link:'/contact'
    },
]

// About Data

import  WebDesign from '../assets/svg/3298604_mobile_responsive_webdesign_icon.svg'
import Rd from '../assets/svg/1174949_js_react js_logo_react_react native_icon.svg'
import Dsa from '../assets/svg/10186549_workflow_diagram_process_network_management_icon.svg'
import WebDevelop from '../assets/svg/1009241_code_coding_programming_seo_network_icon.svg'

export const AboutData = [
    {
        id:1,
        svg:WebDesign ,
        title:"Web Design",
        desc:"The most modern and high-quality design made at a professional level"
    },
    {
        id:2,
        svg:Rd ,
        title:"React Dev",
        desc:"Using React to build high level application"
    },
    {
        id:3,
        svg:Dsa ,
        title:"DSA",
        desc:"To Challege myself everyday to solve LeetCode problems"
    },
    {
        id:4,
        svg:WebDevelop ,
        title:"Web Devlopment",
        desc:"The modern and high-quality wesite made at a professional level"
    },
]


//Social Media =[

import Ig from '../assets/svg/5437083_instagram_social media_ig_social_icon.svg'
import In from '../assets/svg/5437086_in_linked in_media_social_icon.svg'
import GitHub from '../assets/svg/7595663_github_programming_logo_coding_icon.svg'

export const SocialMedia =[
    {
        id:1,
        icon:Ig ,
        link:"#"
    },
    {
        id:2,
        icon:In ,
        link:"#"
    },
    {
        id:3,
        icon:GitHub ,
        link:"#"
    },
]

//Resume Data

export const ResumeData =[
    {
    id:1,
    university:"Vinayka Mission University" ,
    year:"2021 — 2025" ,
    detail:" Vinayaka Mission's Kirupananda Variyar Engineering College, pursuing a Bachelor of Engineering (BE) in Computer Science and Engineering (CSE). As a third-year student " ,
    location:"Salem, Tamilnadu, India" ,
},
    {
    id:2,
    university: "HSC",
    Percentage:"82.3%",
    year:"2020 — 2021" ,
    detail:"I successfully completed my 12th grade education at Sacred Heart Higher Secondary School, This phase equipped me with advanced academic knowledge and prepared me for further academic and professional challenges." ,
    location:"Pandravedu, Tamilnadu, India" ,
},
    {
    id:3,
    university:"SSLC" ,
    year: "2018 — 2019",
    Percentage:"72%",
    detail:"I completed my 10th grade education at Sacred Heart Higher Secondary School, In Tamil Meduim " ,
    location:"Pandravedu, Tamilnadu, India"  ,
},

]