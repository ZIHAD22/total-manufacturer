import React from "react";
import { Link } from "react-router-dom";

const TableRow = ({
  order: {
    _id,
    toolImg,
    toolName,
    orderQuantity,
    totalPrice,
    paid,
    transactionId,
  },
  setShowModalId,
  sNo,
}) => {
  return (
    <tr className="text-center">
      <th>{sNo}</th>
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
      <td className="text-center">
        {!paid ? (
          <Link to={`payment/${_id}`} className="btn btn-xs">
            Pay
          </Link>
        ) : (
          <p className="text-success font-bold">Paid</p>
        )}
      </td>
      <td className="text-center">
        {!paid ? (
          <p className="text-success font-bold">Not Paid</p>
        ) : (
          <p className="text-success font-bold">{transactionId}</p>
        )}
      </td>
    </tr>
  );
};

export default TableRow;
