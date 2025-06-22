import React from "react";
import "./Blog.css";

const Blog = () => {
  const posts = [
    {
      title: "How AI is Transforming Agriculture in Africa",
      date: "June 10, 2025",
      summary:
        "Discover how AI and machine learning are helping African farmers boost yields, predict crop outcomes, and automate decision-making across the value chain."
    },
    {
      title: "5 Smart Farming Technologies Empowering Smallholder Farmers",
      date: "May 22, 2025",
      summary:
        "From smart sensors to drone-based mapping, explore the tools that are making modern farming more accessible and productive for local communities."
    },
    {
      title: "Building Inclusive Agri-Marketplaces",
      date: "April 15, 2025",
      summary:
        "Learn how digital e-marketplaces are bridging gaps between rural producers and urban consumers, ensuring fair prices and reducing post-harvest losses."
    }
  ];

  return (
    <div className="blog-container">
      <h2>From Our Blog</h2>
      <div className="blog-grid">
        {posts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-card-content">
              <h3>{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-summary">{post.summary}</p>
              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
