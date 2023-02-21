import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Card from "../../components/Card";

const CountryNews = () => {
  const [news, setNews] = useState([]);
  const router = useRouter();
  const { countryNews } = router.query;

  const getCountryNews = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const api = await fetch(
      `https://newsdata.io/api/1/news?apikey=${key}&language=en&country=${countryNews}`
    );
    const data = await api.json();
    // console.log(data.articles);
    // console.log(countryNews);
    setNews(data.results);
  };

  useEffect(() => {
    getCountryNews();
  }, [countryNews]);


  return (
    <div>
      <h1 className=" text-xl lg:text-4xl font-bold italic mb-5">{countryNews} head lines: </h1>
       <div className="grid grid-cols-1 gap-y-5 lg:gap-14 lg:grid-cols-3">
        {news.map((newses, index) => {
          return (
            <div key={index}>
              <Card
                title={newses.title}
                image={newses.image_url}
                description={newses.description}
                date={newses.pubDate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryNews;
