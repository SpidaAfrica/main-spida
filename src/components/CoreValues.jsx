import React from "react";
import "./CoreValues.css";

const CoreValues = () => {
  const values = [
    {
      title: "Integrity",
      desc: "We uphold honesty, transparency, and accountability in every partnership and transaction."
    },
    {
      title: "Innovation",
      desc: "We leverage cutting‑edge AI, IoT and data‑driven solutions to disrupt agricultural inefficiencies."
    },
    {
      title: "Sustainability",
      desc: "We are committed to long‑term environmental stewardship and sustainable farming practices."
    },
    {
      title: "Inclusivity",
      desc: "We empower smallholder farmers, ensuring equitable access to tools, markets and financing."
    },
    {
      title: "Collaboration",
      desc: "We work hand‑in‑hand with communities, partners and stakeholders to build stronger ecosystems."
    }
  ];

  return (
    <div className="values-container">
      <h2>Our Core Values</h2>
      <div className="values-grid">
        {values.map((v, i) => (
          <div className="value-card" key={i}>
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreValues;
