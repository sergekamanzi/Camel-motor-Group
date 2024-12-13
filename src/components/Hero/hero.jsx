import { Link } from 'react-router-dom';
import './hero.css';
import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/public/hero2.jpg',
    title: 'Sewage treatment works',
    subtitle: 'Treating sewage before it is released into the environment',
    buttonText: 'Booking service'
  },
  {
    image: '/public/hero3.jpg',
    title: 'Water Purification Systems',
    subtitle: 'Ensuring clean water for communities is our priority',
    buttonText: 'Booking service'
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div id='hero'
      className='simple-hero'
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <div className='header-text'>
        <h5>{slides[currentIndex].title}</h5>
        <h1>{slides[currentIndex].subtitle}</h1>
      </div>
      <div className='start-now'>
        <Link to="/booking">
          <button>{slides[currentIndex].buttonText}</button>
        </Link>
      </div>
      <div className='dots'>
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
