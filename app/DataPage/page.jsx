"use client";

import { useEffect, useState } from "react";
import service from "../(service)/service";
import TableRow from "../(components)/TableRow";

const DataPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const tableResponse = await service.getData();
      if (tableResponse) {
        setData(tableResponse);
      }
    })();
  }, []);

  return (
    <section className="p-5">
      <div className="h-[80vh] overflow-y-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="sticky top-0 bg-neutral-600 text-white border-solid border-2 p-1">
                №
              </th>
              {data &&
                Object.keys(data.results[0]).map((th, id) => {
                  return (
                    <th
                      className="sticky top-0 bg-neutral-600 text-white border-solid border-2 p-1"
                      key={id}
                    >
                      {th}
                    </th>
                  );
                })}
            </tr>
          </thead>

          <tbody className="">
            {data &&
              data.results.map((row, id) => (
                <TableRow number={id} key={row.id} row={row} />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DataPage;
