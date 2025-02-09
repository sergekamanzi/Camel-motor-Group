import './about.css'
import truck from '/truck.jpg'
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const about = () => {
  return (
    <div className='main' id='about'>
        <h2>About Us</h2>
        <div className='main-about'>
              <div className='text'>
              <span style={{color: '#3560b7', fontWeight: 'bold',fontSize: '1.5rem'}}>Waste management</span>
                <p>
                <br/>The process typically involves 
                specialized vehicles,<br/> like vacuum 
                trucks or tankers, equipped to handle <br/>
                liquid and solid waste safely. These 
                vehicles use<br/> suction systems to empty 
                waste containers,<br/> securely transport 
                the waste, and then offload<br/> it at 
                treatment plants or approved disposal sites.
                </p>
                <div className='social-icons'>
               <a href="https://www.instagram.com/camelmotorgroupltd/" target="_blank"> <FiInstagram className='instagram'/></a>
               <a href="https://x.com/camelmotorgroup" target="_blank"><FaXTwitter className='twitter' /></a> 
                <FaTiktok  className='tiktok'/>
                <FaFacebook className='youtube'/>
                </div>
              </div>
              <div className='photo'>
                 <img src={truck} alt="" />
              </div>
        </div>
    </div>
  )
}

export default about
