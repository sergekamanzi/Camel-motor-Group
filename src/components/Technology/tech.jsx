import './tech.css';
import truckfit from '/truck2.jpg';

const Tech = () => {
  return (
    <div className='main-tech' id='technology'>
      <h2>Equipment & Technology</h2>
      <div className='tech-box'>
        <div className='img-tech'>
          <img src={truckfit} alt="Vacuum truck" />
        </div>
        <div className='text-tech'>
          <h4>Vacuum Truck</h4>
          <p>
            A vacuum truck removes septage waste from septic tanks,<br/> processpools, 
            and chemical toilets (portable toilets) for <br/>disposal at an approved 
            septage disposal location.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
