import React, {useRef, useState} from "react";
import contact from "../assests/contact.jpg";
import "../styles/Contact.css";
import emailjs from 'emailjs-com';




function Contact(props) {
  const form = useRef();
  const [result,showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_a9znz9z', e.target, 'user_XepuCocPkLfuEDFxnGULh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
  };
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${contact})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form ref={form} onSubmit={sendEmail}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>
          
          <button type="submit" > Send Message</button>
          
        </form>
      </div>
    </div>
  );
 
}

export default Contact;
