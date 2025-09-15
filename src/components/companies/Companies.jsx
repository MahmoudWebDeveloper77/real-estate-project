import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./prologis.png" alt="prologis Company" />
        <img src="./tower.png" alt="tower Company" />
        <img src="./equinix.png" alt="Equinix Company" />
        <img src="./realty.png" alt="Reality Company" />
      </div>
    </section>
  );
};

export default Companies;
