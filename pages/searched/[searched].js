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
      `https://newsdata.io/api/1/news?apikey=${key}&language=en&q=${searched}`
    );
    const data = await api.json();
    setresult(data.results);
  };

  useEffect(() => {
    getSearchedNews();
  }, [searched]);

  return (
    <div>
      <h1 className=" text-xl lg:text-4xl font-bold italic mb-5">
        {searched} head Lines:{" "}
      </h1>
      <div className="grid grid-cols-1 gap-y-5 lg:gap-14 lg:grid-cols-3">
        {result.map((results, index) => {
          return (
            <div key={index}>
              <Card
                title={results.title}
                image={results.image_url}
                description={results.description}
                date={results.pubDate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Searched;
