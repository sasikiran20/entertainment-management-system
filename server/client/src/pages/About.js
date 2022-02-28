import React from "react";
import about from "../assests/about.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${about})` }}
      ></div>
      <div className="aboutBottom">
        <h1 style={{backgroundColor: ""}}><b><u>ABOUT OUR SYSTEM</u></b></h1>
        <p1>Entertainment is the soul of every event, and event management software ensures that the band that is performing, catering service that is feeding the crowd, or event venue selection is done to the client’s specifications. Making sure entertainment is successful requires organization, planning, and creativity. Every good event planner can use the help of an entertainment event booking software with inbuilt entertainment management features to help you seamlessly handle every job.Dream’s Entertainment Management Software is one of a kind software in which you can book and manage your event, band, catering service, and venue all at the same time. As an entertainment provider, you are well aware of the myriad of things you need to keep in mind in order to organize the perfect event, and that’s where our software can provide organization for all your tasks.</p1>
        
        <p2> Dream’s Entertainment Management Software is one of a kind software in which you can book and manage your event, band, catering service, and venue all at the same time. As an entertainment provider, you are well aware of the myriad of things you need to keep in mind in order to organize the perfect event, and that’s where our software can provide organization for all your tasks.</p2>
         
        
       
      </div>
    </div>
  );
}

export default About;
