import { useEffect, useState } from "react";
import service from "../(service)/service";
import { dateFormating } from "../(assets)/utils";
import Image from "next/image";
import saveImg from "../(assets)/icons/save.svg";
import pencilImg from "../(assets)/icons/pencil.svg";

const TableRow = ({ number, row }) => {
  const [rowData, setRowData] = useState({
    name: row.name,
    email: row.email,
    birthday_date: dateFormating(row.birthday_date),
    phone_number: row.phone_number,
    address: row.address,
  });
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (key, e) => {
    setRowData((prev) => {
      return { ...prev, [key]: e.target.value };
    });
  };

  const handleSaveBtn = async () => {
    const resp = await service.updateData(row.id, rowData);
    if (resp) {
      setIsEdit(false);
    }
  };

  const handleEditBtn = async () => {
    setIsEdit(true);
  };

  return (
    <tr className={`${isEdit ? "animate-pulse" : ""}`}>
      <td>
        <textarea
          readOnly
          className="w-full border-solid border-2 p-1 resize-none"
          defaultValue={number + 1}
        />
      </td>
      <td>
        <textarea
          readOnly
          className="w-full border-solid border-2 p-1 resize-none"
          defaultValue={row.id}
        />
      </td>
      {Object.entries(rowData).map((pare, id) => (
        <td key={id}>
          <textarea
            readOnly={!isEdit}
            className="w-full border-solid border-2 p-1 resize-none read-only:"
            defaultValue={pare[1]}
            onChange={(e) => handleChange(pare[0], e)}
          />
        </td>
      ))}
      <td className="h-auto table-cell">
        <div className="h-auto flex lfex-row">
          <button disabled={isEdit} onClick={handleEditBtn} className="w-10">
            <Image
              width={40}
              height={40}
              src={pencilImg}
              alt="change"
              style={!isEdit ? "" : { opacity: "0.2" }}
            />
          </button>
          <button
            disabled={!isEdit ? true : false}
            onClick={handleSaveBtn}
            className="w-10"
          >
            <Image
              width={40}
              height={40}
              src={saveImg}
              alt="save"
              style={isEdit ? "" : { opacity: "0.2" }}
            />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
