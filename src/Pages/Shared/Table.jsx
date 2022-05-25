import React from "react";
import TableRow from "./TableRow";

const Table = ({ orders, setShowModalId }) => {
  return (
    <div className="mt-5">
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>s.no</th>
              <th>image</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <TableRow
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
