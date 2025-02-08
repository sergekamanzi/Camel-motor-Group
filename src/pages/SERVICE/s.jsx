import "./s.css";
import { FaTruckFast } from "react-icons/fa6";
import { MdCleanHands, MdDeleteSweep } from "react-icons/md";

const S = () => {
  return (
    <div className="main-s">
      <div className="container">
        <h1>Our Services</h1>
        <h6>
          The solutions aim to combat toxic cyanobacteria and harmful algal blooms.<br/>
          They also target other dangerous environmental risks, ensuring a safer environment.
        </h6>
      </div>

      <div className="card-s">
        <div className="service-card">
          <FaTruckFast className="service-icon" />
          <div className="service-text">
            <h3>Emptying & Transportation</h3>
            <p>
              The process of collecting, transporting, and disposing of waste from
              designated collection points to a disposal or treatment facility. This
              service is essential for managing waste from septic tanks, portable
              toilets, industrial tanks, and dumping sites.
            </p>
          </div>
        </div>

        <div className="service-card">
          <MdCleanHands className="service-icon" />
          <div className="service-text">
            <h3>Odor Neutralizer</h3>
            <p>
              A substance designed to eliminate or control unpleasant smells by
              chemically neutralizing odor molecules rather than simply masking them.
              Unlike air fresheners, which cover odors with fragrance, odor neutralizers
              actively break down or alter the structure of odor-causing compounds.
            </p>
          </div>
        </div>

        <div className="service-card">
          <MdDeleteSweep className="service-icon" />
          <div className="service-text">
            <h3>Manual Emptying</h3>
            <p>
              The process of physically removing waste or unwanted materials by hand
              from containers, tanks, or other holding units. This method is used in
              environments where mechanical systems may be impractical, such as small-scale
              operations, household settings, or waste management scenarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default S;
