import axios from "../../utility/axios";
import React, { useEffect, useState } from "react";
import ToolsItem from "./ToolsItem";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    axios.get("tools.json").then((res) => {
      const { data } = res;
      console.log(data);
      setTools(data);
    });
  }, []);
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-center">Our Products</h1>
      <div className="grid grid-cols-1 gap-y-10  lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolsItem key={tool._id} tool={tool} />
        ))}
      </div>
    </div>
  );
};

export default Tools;
