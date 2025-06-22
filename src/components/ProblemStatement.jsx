import React from "react";
import "./ProblemStatement.css";
import ps from '../assets/ps.png';

const ProblemStatement = () => {
  return (
    <section className="problem-section">
      <div className="problem-text">
        <p className="subheading" style={{color: "green"}}>Problem Statement</p>
        <h1>
          Africa’s Food System Is Broken. <br />
          <span className="highlight">We’re Here to Fix It!</span>
        </h1>
        <p>
          Africa is blessed with fertile lands, hardworking farmers, and a youthful population but
          broken systems have kept our agricultural potential untapped.
        </p>
        <p>The challenges are clear and obvious, including:</p>
        <ul>
          <li>❌ Fragmented markets</li>
          <li>❌ Manual, outdated farming practices</li>
          <li>❌ Limited access to inputs and technology</li>
          <li>❌ Climate uncertainty, with no backup plans</li>
          <li>❌ Middlemen draining farmer profits</li>
          <li>❌ Lack of reliable financing</li>
        </ul>
        <p>
          This is why we have created SPIDA, where we combine local expertise with cutting-edge
          digital technologies to solve these problems once and for all.
        </p>
        <p>
          From fragmentation to connected food system, inefficiency to abundance and from surviving
          to thriving!
        </p>
      </div>

      <div className="problem-images">
        <img src={ps} alt="Farmer" className="img-one" />
      </div>
    </section>
  );
};

export default ProblemStatement;
