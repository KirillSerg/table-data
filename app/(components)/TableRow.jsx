import { useEffect, useState } from "react";
import service from "../(service)/service";
import { dateFormating } from "../(assets)/utils";

const TableRow = ({ number, row }) => {
  console.log(row.birthday_date);
  const [rowData, setRowData] = useState({
    name: row.name,
    email: row.email,
    birthday_date: dateFormating(row.birthday_date),
    phone_number: row.phone_number,
    address: row.address,
  });

  const handleChange = (key, e) => {
    setRowData((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  const onClick = async () => {
    const resp = await service.updateData(row.id, rowData);
    if (resp) {
      console.log(resp);
    }
  };

  return (
    <tr>
      <td>
        <textarea
          disabled
          className="w-full border-solid border-2 p-1 resize-none"
          defaultValue={number + 1}
        />
      </td>
      <td>
        <textarea
          className="w-full border-solid border-2 p-1 resize-none"
          defaultValue={row.id}
        />
      </td>
      {Object.entries(rowData).map((pare, id) => (
        <td key={id}>
          <textarea
            className="w-full border-solid border-2 p-1 resize-none"
            defaultValue={pare[1]}
            onChange={(e) => handleChange(pare[0], e)}
          />
        </td>
      ))}
      <td>
        <button onClick={onClick}>V</button>
      </td>
    </tr>
  );
};

export default TableRow;
