/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Herosection = () => {
  const [businessNews, setBusinessNews] = useState([]);

  const getHeroSection = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const api = await fetch(
      `https://newsdata.io/api/1/news?apikey=${key}&language=en&category=business`
    );
    const data = await api.json();
    setBusinessNews(data.results);
  };

  useEffect(() => {
    getHeroSection();
  }, []);

  return (
    <div className=" mt-10">
      <h2 className=" text-xl lg:text-4xl font-bold italic mb-5">
        Today's Head lines:
      </h2>

      <div className="grid grid-cols-1 gap-y-5 lg:gap-14 lg:grid-cols-3">
        {businessNews.map((news, index) => {
          return (
            <div key={index}>
              <Card
                title={news.title}
                image={news.image_url}
                description={news.description}
                date={news.pubDate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Herosection;
