"use client";

import { useEffect, useState } from "react";
import service from "../(service)/service";

const DataPage = () => {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    (async () => {
      const tableResponse = await service.getData();
      if (tableResponse) {
        console.log(tableResponse);
        setData(tableResponse);
      }
    })();
  }, []);

  return (
    <section>
      {data &&
        data.results.map((row) => {
          return <p key={row.id}>{row.name}</p>;
        })}
    </section>
  );
};

export default DataPage;
