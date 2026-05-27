import React from "react";
import "./NewsItem.css";
import newsImg from '../../assets/news-img.jpg'

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="news-card">
      <img
        src={src?src:newsImg}
        alt="news"
        className="news-image"
      />

      <div className="news-content">
        <h5 className="news-title">
          {title ? title.slice(0, 50) : "No Title"}
        </h5>

        <p className="news-description">
          {description
            ? description.slice(0, 90)
            : "No Description Available"}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="read-more-btn"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;