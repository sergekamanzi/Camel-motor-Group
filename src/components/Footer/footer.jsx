import './footer.css'
import { FaRegCopyright } from "react-icons/fa";
import { PiLineVertical } from "react-icons/pi";

const footer = () => {
  return (
    <div className='main-footer'>
       <div className='foot'>
          <p><FaRegCopyright /> 2024 CamelMG Ltd<PiLineVertical />All Right Reserved</p>
       </div>
    </div>
  )
}

export default footer
