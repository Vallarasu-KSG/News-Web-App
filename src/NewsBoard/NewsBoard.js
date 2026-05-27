import React, { useEffect, useState } from "react";
import NewsItem from "../Components/NewsItem/NewsItem";
import "./NewsBoard.css";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&apikey=${process.env.REACT_APP_API_KEY}`
      );

      const data = await response.json();

      setArticles(data.articles || []);
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="news-heading">
        Latest <span>News</span>
      </h2>

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
    </div>
  );
};

export default NewsBoard;