"use client";

import { useEffect, useState } from "react";
import service from "../(service)/service";

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
    <section className="">
      <table className="w-full ">
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
            data.results.map((row, id) => {
              return (
                <tr key={row.id}>
                  <td>
                    <textarea
                      disabled
                      className="w-full border-solid border-2 p-1 resize-none"
                      defaultValue={id + 1}
                    />
                  </td>
                  {Object.values(row).map((td, id) => (
                    <td key={id}>
                      <textarea
                        className="w-full border-solid border-2 p-1 resize-none"
                        defaultValue={td}
                      />
                    </td>
                  ))}
                </tr>
              );
            })}
        </tbody>
      </table>
    </section>
  );
};

export default DataPage;
