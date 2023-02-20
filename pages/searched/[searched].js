import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";

const Searched = () => {
  const router = useRouter();
  const { searched } = router.query;

  const [result, setresult] = useState([]);

  const getSearchedNews = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY;
    const api = await fetch(
      `https://newsapi.org/v2/top-headlines?apiKey=${key}&language=en&q=${searched}`
    );
    const data = await api.json();
    console.log(data);
    console.log(searched)
    // console.log(countryNews);
    setresult(data.articles);
  };

  useEffect(() => {
    getSearchedNews();
  }, [searched]);

  return (
    <div>
        <h1 className=" text-xl lg:text-4xl font-bold italic mb-5">{searched} head Lines:  </h1>
      <div className="grid grid-cols-1 gap-y-5 lg:gap-14 lg:grid-cols-3">
        {result.map((results) => {
          return (
            <div key={results.id}>
              <Card
                title={results.title}
                image={results.urlToImage}
                date={results.publishedAt}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
