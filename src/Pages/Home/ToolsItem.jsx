import React from "react";
import { Link } from "react-router-dom";

const ToolsItem = ({
  tool: { _id, toolName, toolImg, toolDescription, minOrder, quantity, price },
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={toolImg} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toolName}</h2>
        <p title={toolDescription}>
          <strong className="block">Description:</strong>
          {toolDescription.length > 40
            ? toolDescription.slice(0, 40) + "..."
            : toolDescription}
        </p>
        <p>
          <strong>Minimum Order Quantity: {minOrder} unit</strong>
        </p>
        <p>
          <strong>Available Quantity: {quantity} unit</strong>
        </p>
        <p>
          <strong>Price: ${price} per unit</strong>
        </p>
        <div className="card-actions mx-auto mt-5">
          <Link to={`purchase/${_id}`} className="btn btn-primary">
            book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsItem;
