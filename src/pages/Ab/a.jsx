import "./a.css";
import m1 from "/M1.jpg";
import m2 from "/M2.jpg";
import m3 from "/M3.jpg";

const A = () => {
  return (
    <div className="main-a">
      <div className="title-container">
        <h1>Our Mission</h1>
        <h6>
          The company is at the forefront of efforts to protect and enhance life
          on Earth by restoring, safeguarding, and optimizing the health and
          safety of water bodies across the globe. This includes preserving
          aquatic biodiversity, ecosystems, and supporting related economies.
          They lead with innovative scientific expertise and advanced
          technological solutions.
        </h6>
      </div>

      <div className="card-a">
        <div className="card">
          <img src={m1} alt="Mission 1" />
          <p>
            Safeguard the environment by effectively managing and treating
            wastewater, reducing pollution, and ensuring that clean water is
            returned to nature. We are committed to minimizing our ecological
            footprint and promoting sustainable practices to protect natural
            resources for future generations.
          </p>
        </div>
        <div className="card">
          <img src={m2} alt="Mission 2" />
          <p>
            Provide reliable and efficient sewage services to protect public
            health and hygiene. We aim to prevent contamination of drinking
            water sources and mitigate the risk of waterborne diseases,
            ensuring a clean and safe environment for all communities we serve.
          </p>
        </div>
        <div className="card">
          <img src={m3} alt="Mission 3" />
          <p>
            Continuously improve our services by adopting innovative
            technologies and best practices. We strive for operational
            excellence in wastewater treatment and management, delivering
            top-tier solutions that meet the evolving needs of our clients while
            adhering to the highest industry standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default A;
