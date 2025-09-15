import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Homyz</span>
          <span className="secondaryText">
            Subscribe and find super attractive prices from us.
            <br />
            Find <strong>YOUR</strong> Residence Soon!
          </span>
          <button className="button">
            <a href="mailto:mahmoudwebdev77@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
