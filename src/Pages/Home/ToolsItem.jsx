import React from "react";
import { Link } from "react-router-dom";

const ToolsItem = ({
  tool: { toolName, toolImg, toolDescription, minOrder, quantity, price },
}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure class="px-10 pt-10">
        <img src={toolImg} alt="Shoes" class="rounded-xl" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{toolName}</h2>
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
        <div class="card-actions mx-auto mt-5">
          <Link to="purchase" class="btn btn-primary">
            book now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToolsItem;
