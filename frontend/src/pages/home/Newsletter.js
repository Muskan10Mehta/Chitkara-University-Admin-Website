import React from "react";
import Layout from "./Layout";
import Title from "../../common/components/home/title";
import Table from "./../../common/components/table/table";
import TableRow from "./../../common/components/table/row";

import { getNews } from "../admin/getPDF";

export default function Newsletter() {
  const [news, setNews] = React.useState([]);
  React.useEffect(() => {
    getNews()
      .then((res) => {
        setNews(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  // if(data.length>0){
  return (
    <>
      <Layout
        content={
          <>
            <Title title="Newsletters" />
            <div id="newsletters">
              <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600 border-b-2 border-solid border-red-600">
                Newsletters
              </h1>

              <p className="text-base text-left font-bold text-red-600 ml-5 mt-5 border-l border-solid border-red-600 p-5">
                Every department /school /college of our campus prepares a
                Newsletter which gives an insight of the activities undertaken
                in the specific quarter of the year. We too have our Newsletter,
                and all the editions are posted here for you to read at a time
                of your convenience.
              </p>
              {news.length > 0 ? (
                <Table
                  rows={
                    <>
                      {news.map((item) => (
                        <TableRow
                          content={
                            <a href={item.url} target="_blank" rel="noreferrer">
                              {item.name}
                            </a>
                          }
                        />
                      ))}
                    </>
                  }
                />
              ) : (
                <h3 className="text-xl md:text-3xl mt-10 text-red-600 text-center">
                  Coming soon
                </h3>
              )}
            </div>
            <br />
            <br />
          </>
        }
      ></Layout>
    </>
  );
}
