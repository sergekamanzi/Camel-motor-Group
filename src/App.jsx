import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Hero from './components/Hero/hero';
import Service from './components/Service/service';
import About from './components/About/about';
import Technology from './components/Technology/tech';
import Blog from './components/Blog/blog';
import Donate from './components/Donate/donate';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Booking from './components/Booking/booking';
import './App.css';
import { db } from './firebase';  // Import the Firestore database


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Service />
            <About />
            <Technology />
            <Blog />
            <Donate />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/booking" element={<Booking db={db} />} />  {/* Pass Firestore db as prop */}
      </Routes>
    </Router>
  );
}

export default App;
