import axios from "../../utility/axios";
import React from "react";

const TableRow = ({
  order: { _id, toolImg, toolName, orderQuantity, totalPrice },
  setShowModalId,
}) => {
  let sNo = 1;

  return (
    <tr>
      <th>{sNo++}</th>
      <td>
        <img className="w-[100px] h-[50px]" src={toolImg} alt="" />
      </td>
      <td>{toolName}</td>
      <td>{orderQuantity}</td>
      <td>${totalPrice}/unite</td>
      <td>
        <label
          for="deleteConfirmModal"
          onClick={() => setShowModalId(_id)}
          className="btn btn-xs"
        >
          cancel
        </label>
      </td>
    </tr>
  );
};

export default TableRow;
