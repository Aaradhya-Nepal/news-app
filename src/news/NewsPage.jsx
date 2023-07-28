import axios from "axios";
import React, { useState, useEffect } from "react";
import "./newsPage.css";

const NewsPage = () => {
  const [newsData, setNewsData] = useState();

  useEffect(() => {
    getNewsData();
  }, [true]);

  const getNewsData = () => {
    axios.get("https://www.jsonkeeper.com/b/O5V8").then(function (response) {
      console.log(response);
      // setNewsData(response);
    });
  };

  return (
    <>
      <div className="main-title">News Page</div>
      <div className="main-container">
        {/* {newsData.map((news) => ( */}
        <div className="news-container">
          <div className="news-title">News Title</div>
          <div className="news-image">News Image</div>
          <div className="news-author-date">
            <span className="news-author">Author Name</span>
            <span className="border">|</span>
            <span className="news-publish-date">Publish Date</span>
          </div>
          <div className="news-description">News Description</div>
          <div className="news-cta"> Read Full News</div>
        </div>
        {/* ))} */}
      </div>
    </>
  );
};

export default NewsPage;
