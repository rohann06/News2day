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
      `https://newsapi.org/v2/top-headlines?apiKey=${key}&language=en&country=${countryNews}`
    );
    const data = await api.json();
    // console.log(data.articles);
    // console.log(countryNews);
    setNews(data.articles);
  };

  useEffect(() => {
    getCountryNews();
  }, [countryNews]);


  return (
    <div>
       <div className="grid grid-cols-1 gap-y-5 lg:gap-14 lg:grid-cols-3">
        {news.map((newses) => {
          return (
            <div key={newses.id}>
              <Card
                title={newses.title}
                image={newses.urlToImage}
                date={newses.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryNews;
