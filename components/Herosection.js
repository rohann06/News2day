/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Herosection = () => {
  const [businessNews, setBusinessNews] = useState([]);

  const getHeroSection = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const api = await fetch(
      `https://newsapi.org/v2/top-headlines?category=business&apiKey=${key}&language=en`
    );
    const data = await api.json();
    console.log(data);
    setBusinessNews(data.articles);
  };

  const child = { width: `300em`, height: `100%` };

  useEffect(() => {
    getHeroSection();
  }, []);

  return (
    <div className=" mt-20">
      <h2 className=" text-xl lg:text-4xl font-bold italic">
        World's Business News
      </h2>

      <div className=" grid grid-flow-col auto-cols-[29%] gap-20 overflow-x-auto overscroll-x-contain">
        {businessNews.map((news) => {
          return (
            <div key={news.id} style={child}>
              <Card
                title={news.title}
                image={news.urlToImage}
                date={news.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Herosection;
