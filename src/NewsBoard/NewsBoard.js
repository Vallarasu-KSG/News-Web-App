import React, { useEffect, useState } from "react";
import NewsItem from "../Components/NewsItem/NewsItem";
import "./NewsBoard.css";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `/.netlify/functions/news?category=${category}`
        );

        const data = await response.json();

        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="news-heading">
        Latest <span>News</span>
      </h2>

      {loading ? (
        <div className="loading-container">
          <div className="loader"></div>
          <p>Loading News...</p>
        </div>
      ) : (
        <div className="news-container">
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.image}
              url={news.url}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;