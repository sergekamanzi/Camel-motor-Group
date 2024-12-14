import "./booking.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import logo from '/logo.png';
import { db, collection, addDoc } from '../../firebase'; // Import Firestore

const Booking = () => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      fullNames: e.target[0].value,
      email: e.target[1].value,
      companyName: e.target[2].value,
      phoneNumber: e.target[3].value,
      district: e.target[4].value,
      sector: e.target[5].value,
      cell: e.target[6].value,
      village: e.target[7].value,
      streetAddress: e.target[8].value,
      serviceType: e.target[9].value,
      volumeOfWaste: e.target[10].value,
      preferredDate: e.target[11].value,
      preferredTime: e.target[12].value,
      message: e.target[13].value,
    };

    try {
      // Add data to Firestore
      const docRef = await addDoc(collection(db, "bookings"), formData);
      alert("Booking submitted successfully!");
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
      alert("Error submitting the booking.");
    }
  };

  return (
    <div className='main-booking'>
      <h4>
        <Link to="/">
          <IoMdArrowRoundBack /> Back to Home
        </Link>
      </h4>
      <div className='booking-container'>
        <div className='booking-info'>
          <img src={logo} alt="" />
          <h3>Booking Service</h3>
          <p>We are here to help you with your waste<br/> management needs at any time, book for<br/> your service now.</p>
        </div>
        <div className='booking-form'>
          <form onSubmit={handleSubmit}>
            <div className='input-group'>
              <label>Full Names</label>
              <input type="text" placeholder='Amazina' required />
            </div>
            <div className='input-group'>
              <label>Email</label>
              <input type="email" placeholder='imeli@example.com' required />
            </div>
            <div className='input-group'>
              <label>Company Name</label>
              <input type="text" placeholder='Amazina ya kampani' />
            </div>
            <div className='input-group'>
              <label>Phone Number</label>
              <input type="text" placeholder='telephone' required />
            </div>
            <div className='input-group'>
            <div className='input-group'>
              <label>District</label>
              <input type="text" placeholder='Akarere' required />
            </div>
            </div>
            <div className='input-group'>
              <label>Sector</label>
              <input type="text" placeholder='umurenge' required />
            </div>
            <div className='input-group'>
              <label>Cell</label>
              <input type="text" placeholder='Akagali' required />
            </div>
            <div className='input-group'>
              <label>Village</label>
              <input type="text" placeholder='Umudugudu' required />
            </div>
            <div className='input-group'>
              <label>Street Address</label>
              <input type="text" placeholder='numero yumuhanda' />
            </div>
            <div className='input-group'>
              <label htmlFor="service">Service</label>
              <select id="service" name="serviceType" required>
                <option value="Septic Tank Emptying">Hitamo serivise</option>
                <option value="Septic Tank Emptying">Septic Tank Emptying</option>
                <option value="Sludge Transport">Sludge Transport</option>
              </select>
            </div>
            <div className='input-group'>
              <label>Volume of waste (m&#179;)</label>
              <input type="text" placeholder='Ingano yumwanda' required />
            </div>
            <div className='input-group'>
              <label>Preferred Date/ umunsi byakorwaho</label>
              <input type="date" required />
            </div>
            <div className='input-group'>
              <label>Preferred Time/ isaha byakorwaho</label>
              <input type="time" required />
            </div>
            <div className='input-group message'>
              <label>Message</label>
              <input type="text" placeholder='Message' />
            </div>
            <div className='checkbox-group'>
              <input type="checkbox" required />
              <label>By checking this box, you agree to our terms and conditions and consent to receive updates from us.</label>
            </div>
            <button type='submit'>Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
