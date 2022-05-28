import React from "react";
import TableRow from "./TableRow";

const Table = ({ orders, setShowModalId }) => {
  return (
    <div className="mt-5">
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr className="text-center">
              <th>s.no</th>
              <th>image</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>action</th>
              <th>Payment</th>
              <th>transaction id</th>
              <th>order status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <TableRow
                sNo={index + 1}
                key={order._id}
                order={order}
                setShowModalId={setShowModalId}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
