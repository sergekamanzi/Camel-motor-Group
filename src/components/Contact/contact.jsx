import './contact.css';
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className='main-contact' id='contact'>
      <div className='contact-container'>
        <h3>Get in touch</h3><br/><br/>
        <h5>Visit us</h5><br/>
        <p>Come say hello at our office<br/>123 main street, kk35st</p>
        <h5>Chat with us</h5><br/>
        <p>Our friendly team is here to help<br/>e@gmail.com</p>
        <h5>Call us</h5><br/>
        <p className='phone'>
            click here to call or write <br/>
            <a href="https://wa.me/250786289187" target="_blank" rel="noopener noreferrer">
               <FaWhatsapp className='icon whatsapp'/> +250786289187
            </a>
          </p>
        <h5>Social media</h5>
        <div className='social-icons'>
          <FiInstagram className='icon instagram'/>
          <FaXTwitter className='icon twitter' />
          <FaTiktok className='icon tiktok'/>
          <FaFacebook  className='icon youtube'/>
        </div>
      </div>

      <div className='contact-form'>
        <h3>Send us a message</h3>
        <div className='names'>
          <div className='input-groupz'>
            <label>First Name</label>
            <input type="text" placeholder='First Name' />
          </div>
          <div className='input-groupz'>
            <label>Last Name</label>
            <input type="text" placeholder='Last Name' />
          </div>
        </div>
        <div className='input-groupz'>
          <label>Email</label>
          <input type="email" placeholder='Email' />
        </div>
        <div className='input-groupz'>
          <label>Phone</label>
          <input type="text" placeholder='Phone' />
        </div>
        <div className='input-groupz'>
          <label>Company Name</label>
          <input type="text" placeholder='Company Name' />
        </div>
        <div className='input-groupz'>
          <label>Message</label>
          <textarea placeholder='Your Message'></textarea>
        </div>
        <button className='send-button'>Send Message</button>
      </div>
    </div>
  );
};

export default Contact;
