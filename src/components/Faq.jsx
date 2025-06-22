import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is your company’s mission?",
      answer:
        "To leverage cutting-edge technology, smart financing, and data intelligence to eliminate inefficiencies in Africa’s agricultural value chain, boost farmers’ productivity, unlock access to markets, and reduce food insecurity."
    },
    {
      question: "What is your vision for the future?",
      answer:
        "To become a leading AgriTech company in Africa leveraging smart technology to deliver sustainable, inclusive, and scalable agricultural solutions that deliver net-positive outcomes to all stakeholders by 2050."
    },
    {
      question: "How do you support smallholder farmers?",
      answer:
        "We offer end-to-end solutions that improve production, provide actionable agri-intelligence, enable financing, and secure guaranteed market access for smallholder farmers."
    },
    {
      question: "What technologies do you use?",
      answer:
        "We integrate Artificial Intelligence, IoT, Machine Learning, and data-driven tools to transform Africa’s agri–value chains into engines of prosperity."
    },
    {
      question: "What services do you offer?",
      answer:
        "Our platform provides smart farming tools, agricultural mechanization (like shared tractor services), logistics, e-marketplace access, and AI-powered extension agents."
    }
  ];

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => toggleIndex(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {activeIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
