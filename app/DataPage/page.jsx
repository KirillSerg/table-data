"use client";

import { useEffect, useState } from "react";
import service from "../(service)/service";
import TableRow from "../(components)/TableRow";
import { useSearchParams } from "next/navigation";

const DataPage = () => {
  const [data, setData] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const hendlerNextPage = async () => {
    const response = await service.getData(`${data.next}`);
    if (response) {
      setData(response);
    }
  };
  const hendlerPrevPage = async () => {
    const response = await service.getData(`${data.previous}`);
    if (response) {
      setData(response);
    }
  };

  useEffect(() => {
    (async () => {
      const tableResponse = await service.getData();
      if (tableResponse) {
        setData(tableResponse);
      }
    })();
  }, []);

  return (
    <section className="p-5 flex flex-col items-center">
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
      <div className="flex flex-row w-1/3 py-4 max-w-lg justify-between text-2xl text-blue-800">
        <button onClick={hendlerPrevPage}>{"<<Prev"}</button>
        <button onClick={hendlerNextPage}>{"Next>>"}</button>
      </div>
    </section>
  );
};

export default DataPage;
