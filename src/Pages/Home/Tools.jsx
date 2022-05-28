import axios from "../../utility/axios";
import React, { useEffect, useState } from "react";
import ToolsItem from "./ToolsItem";
import { useQuery } from "react-query";
import Spinner from "../Shared/Spinner";

const Tools = () => {
  const { data: tools, isLoading } = useQuery("toolsData", async () => {
    const { data } = await axios.get("products/home-products");

    return data;
  });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center">Our Products</h1>
      <div className="grid grid-cols-1 gap-y-10  lg:grid-cols-3">
        {tools?.map((tool) => (
          <ToolsItem key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
