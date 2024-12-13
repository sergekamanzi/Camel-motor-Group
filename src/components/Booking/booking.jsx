import "./booking.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Booking = () => {
  return (
    <div className='main-booking'>
      <h4>
        {/* Use Link to navigate back to the homepage */}
        <Link to="/">
          <IoMdArrowRoundBack /> Back to Home
        </Link>
      </h4>
      <div className='booking-container'>
        <img src="" alt="" />
        <h3>Booking Service</h3>
        <p>We are here to help you with your waste management needs at any time, book for your service now.</p>
      </div>
      <div className='booking-form'>
        <form>
          <div className='input-group'>
            <label>Full Names</label>
            <input type="text" placeholder='Amazina ' required />
          </div>
          <div className='input-group'>
            <label>Email</label>
            <input type="text" placeholder='imeli@example.com' required/>
          </div>
          <div className='input-group'>
            <label>Company Name</label>
            <input type="text" placeholder='Amazina ya kampani' />
          </div>
          <div className='input-group'>
            <label>Phone Number</label>
            <input type="text" placeholder='telephone' required/>
          </div>
          <div className='input-group'>
            <label htmlFor="District">District</label>
            <select id="District" name="service" placeholder='Akarere' required>
              <option value="district1">Nyarugenge</option>
              <option value="district2">Kicukiro</option>
              <option value="district3">Gasabo</option>
            </select>
          </div>
          <div className='input-group'>
            <label>Sector</label>
            <input type="text" placeholder='umurenge' required/>
          </div>
          <div className='input-group'>
            <label>Cell</label>
            <input type="text" placeholder='Akagali' required/>
          </div>
          <div className='input-group'>
            <label>Village</label>
            <input type="text" placeholder='Umudugudu' required/>
          </div>
          <div className='input-group'>
            <label>Street Address</label>
            <input type="text" placeholder='numero yumuhanda' />
          </div>
          <div className='input-group'>
            <label htmlFor="service">Service</label>
            <select id="service" name="service" placeholder='serivise ukeneye' required>
              <option value="service1">Septic Tank Emptying eg:commercial,Residantial waste/ Gutwara inyanda idafite </option>
              <option value="service2">Sludge Transport/Gutwara imyanda yo munganda</option>
            </select>
          </div>
          <div className='input-group'>
            <label>Volume of waste</label>
            <input type="text" placeholder='Ingano yumwanda ' required/>
          </div>
          <div className='input-group'>
            <label>Prefered Date/ umunsi byakorwaho</label>
            <input type="date" required/>
          </div>
          <div className='input-group'>
            <label>Preferred Time/ isaha byakorwaho</label>
            <input type="time" required/>
          </div>
          <div className='input-group'>
            <label>Message</label>
            <input type="text" placeholder='Message' />
          </div>
          <div className='input-group'>
             <input type="checkbox" />
             <label>By checking this box, you agree to our terms and conditions and consent to receive updates from us.</label>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
