import { Component } from "react";
import axios from "axios";
import { useState } from "react";
import React, { useEffect, useReducer } from "react";
import Left from ".././components/Left";
import Right from ".././components/Right";
// import "../css/Homepage.css"

function HomePage() {
  const [listNews, setListNews] = useState([]);
  const getData = () => {
    axios
      .get(`https://61bc10bdd8542f001782451c.mockapi.io/news`)
      .then((News) => {
        setListNews(News.data);
      });
  };
  useEffect(() => {
    // console.info(Math.random())
    getData();
  }, []);
  return (
    <div className="content">
      <div className="big-content">
        <div className="world">
          <h1>THẾ GIỚI</h1>
          <div className="content-left">
            {listNews
              .filter((News) => News.idCategory == "1")
              .map((News, index) => (
                <Left key={index} image={News.img} title={News.title} />
              ))}
          </div>
          <div className="content-right">
            {listNews
              .filter((News) => News.idCategory == "2")
              .map((News, index) => (
                <Right key={index} image={News.img} title={News.title} />
              ))}
          </div>
        </div>
      </div>

      <div className="business">
        <div className="big-content">
          <h1>TÀI CHÍNH - KINH DOANH</h1>
          <div className="content-left">
            {listNews
              .filter((News) => News.idCategory == "3")
              .map((News, index) => (
                <Left key={index} image={News.img} title={News.title} />
              ))}
          </div>
          <div className="content-right">
            {listNews
              .filter((News) => News.idCategory == "4")
              .map((News, index) => (
                <Right key={index} image={News.img} title={News.title} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
