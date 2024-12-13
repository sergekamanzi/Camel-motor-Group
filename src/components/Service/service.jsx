import './service.css';
import { useState } from 'react';
import { FaTruckFast } from "react-icons/fa6";
import { MdCleanHands } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";

const Service = () => {
  // State to control the expanded state for each service
  const [expanded, setExpanded] = useState([false, false, false]);

  const toggleReadMore = (index) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <div id='service'>
        <h2>Services</h2>
    <div className='main-service'>
        <div className='services'>
             <div className='service-icons'><FaTruckFast /></div>
             <div>
                <h3>Emptying, Transportation</h3>
                <p>
                  {expanded[0] ? (
                    <>
                      the process of collecting, transporting,
                      and disposing of waste from designated
                      collection points to a disposal or treatment
                      facility. This service is essential in managing 
                      waste from septic tanks, portable toilets, 
                      industrial tanks, and dumping sites.
                    </>
                  ) : (
                    <>the process of collecting, transporting, and disposing...</>
                  )}
                  <span className="read-more" onClick={() => toggleReadMore(0)}>
                    {expanded[0] ? " Read Less" : " Read More"}
                  </span>
                </p>
             </div>
        </div>

        <div className='services'>
             <div className='service-icons'><MdCleanHands /></div>
             <div>
                <h3>Odor neutralizer</h3>
                <p>
                  {expanded[1] ? (
                    <>
                      substance or product designed to eliminate or control unpleasant
                      smells by chemically neutralizing odor molecules rather than
                      simply masking them. Unlike air fresheners, which cover up odors 
                      with fragrance, odor neutralizers actively interact with the
                      compounds causing the smell, breaking them down or altering
                      their structure to remove the odor at its source.
                    </>
                  ) : (
                    <>substance or product designed to eliminate or control unpleasant...</>
                  )}
                  <span className="read-more" onClick={() => toggleReadMore(1)}>
                    {expanded[1] ? " Read Less" : " Read More"}
                  </span>
                </p>
             </div>
        </div>

        <div className='services'>
             <div className='service-icons'><MdDeleteSweep /></div>
             <div>
                <h3>Manual emptying</h3>
                <p>
                  {expanded[2] ? (
                    <>
                      the process of physically removing waste or unwanted materials
                      by hand from containers, tanks, or other holding units. This
                      method is commonly used in environments where mechanical systems
                      may be impractical or unnecessary, such as in smaller-scale
                      operations, household settings, or waste management scenarios.
                    </>
                  ) : (
                    <>the process of physically removing waste or unwanted materials...</>
                  )}
                  <span className="read-more" onClick={() => toggleReadMore(2)}>
                    {expanded[2] ? " Read Less" : " Read More"}
                  </span>
                </p>
             </div>
        </div>
    </div>
</div>
  );
};

export default Service;
