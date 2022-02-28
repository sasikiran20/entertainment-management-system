import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon  /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
        
      </div>
      <p>
      
      <p style={{color:"white"}}>Made for the SDP -1</p></p>
      <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: "150px"}}/>

      <p> &copy; 2021 yvsfrnds@gmail.com</p>
    </div>
  );
}

export default Footer;
