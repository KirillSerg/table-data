import React from "react";

const TableRow = ({ number, row }) => {
  return (
    <tr>
      <td>
        <textarea
          disabled
          className="w-full border-solid border-2 p-1 resize-none"
          defaultValue={number + 1}
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
};

export default TableRow;
