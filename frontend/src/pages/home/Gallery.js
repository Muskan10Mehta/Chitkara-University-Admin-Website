import React from "react";
import Layout from "./Layout";
import Title from "../../common/components/home/title";
import { getGallery } from "../admin/getPDF";
import Table from "./../../common/components/table/table";
import TableRow from "./../../common/components/table/row";

export default function Gallery() {
  const [data, setData] = React.useState([]);
  //const [celeb, setCeleb] = React.useState([]);

  React.useEffect(() => {
    getGallery()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error");
      });
    // getCeleb()
    //   .then((res) => {
    //     setCeleb(res.data);
    //   })
    //   .catch((err) => {
    //     console.log("error");
    //   });
  }, []);
  return (
    <>
      <Layout
        content={
          <>
            <Title title="Gallery" />
            <div id="gallery">
              <p className="text-base text-left font-bold text-red-600 ml-5 mt-5 border-l border-solid border-red-600 p-5">
                A picture can convey what thousand words cannot!!...so we have
                this gallery of various activities /arrangements we have done.
                We have enjoyed every bit of the activities/arrangements and
                hope you too enjoy them. Some of the albums will give you and
                idea of the facilities and infrastructure that we have in this
                beautiful, clean and green campus of ours !!!
              </p>
              {data.length > 0 ? (
                <Table
                  rows={
                    <>
                      {data.map((item) => (
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
            {/* <div id="celebrations">
              <h1 className="text-2xl font-bold text-left text-red-600 ml-5 border-b border-solid border-red-600">
                Celebrations and Arrangements
              </h1>
              {celeb.length > 0 ? (
                <Table
                  rows={
                    <>
                      {celeb.map((item) => (
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
            </div> */}
          </>
        }
      ></Layout>
    </>
  );
  // if (data.length > 0) {
  //   return (
  //     <Layout
  //       content={
  //         <>
  //           <Title title="Gallery" />
  //           <Table
  //             rows={
  //               <>
  //                 {data.map((item) => (
  //                   <TableRow
  //                     content={
  //                       <a href={item.url} target="_blank" rel="noreferrer">
  //                         {item.name}
  //                       </a>
  //                     }
  //                   />
  //                 ))}
  //               </>
  //             }
  //           />
  //         </>
  //       }
  //     ></Layout>
  //   );
  // } else {
  //   return (
  //     <Layout
  //       content={
  //         <>
  //           <Title title="Gallery" />
  //           <h3 class="text-xl md:text-3xl mt-10 text-red-600 text-center">
  //             Coming Soon
  //           </h3>
  //         </>
  //       }
  //     ></Layout>
  //   );
  // }
}
