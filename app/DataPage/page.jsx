"use client";

import { useEffect, useState } from "react";
import service from "../(service)/service";
import TableRow from "../(components)/TableRow";

const DataPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const hendlerNextPage = async () => {
    if (data.next) {
      setIsLoading(true);
      const response = await service.getData(`${data.next}`);
      if (response) {
        setData(response);
      }
      setIsLoading(false);
    }
  };
  const hendlerPrevPage = async () => {
    if (data.previous) {
      setIsLoading(true);
      const response = await service.getData(`${data.previous}`);
      if (response) {
        setData(response);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const tableResponse = await service.getData();
      if (tableResponse) {
        setData(tableResponse);
      }
      setIsLoading(false);
    })();
  }, []);

  return (
    <section className="p-5 flex flex-col items-center">
      {isLoading && <h1>...Loading</h1>}
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
        <button
          disabled={!data?.previous}
          onClick={hendlerPrevPage}
          className={`${!data?.previous ? "text-slate-600" : ""}`}
        >
          {"<<Prev"}
        </button>
        <button
          disabled={!data?.next}
          onClick={hendlerNextPage}
          className={`${!data?.next ? "text-slate-600" : ""}`}
        >
          {"Next>>"}
        </button>
      </div>
    </section>
  );
};

export default DataPage;
