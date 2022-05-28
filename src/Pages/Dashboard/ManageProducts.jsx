import axios from "../../utility/axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import ProductDeleteModal from "./ProductDeleteModal";
import Spinner from "../Shared/Spinner";

const ManageProducts = () => {
  const [productId, setProductId] = useState("");
  const {
    data: productsData,
    refetch,
    isLoading,
  } = useQuery("productsData", async () => {
    const { data } = await axios.get("products");
    
    return data;
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <h1 className="text-4xl text-center font-bold">
        Dashboard (All Products)
      </h1>
      <div className="mt-5">
        <div className="overflow-x-auto">
          <table className="table w-full text-center">
            <thead>
              <tr>
                <th>s.no</th>
                <th>image</th>
                <th>name</th>
                <th>price</th>
                <th>Available Quantity</th>
                <th>minimum order quantity</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {productsData?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      className="w-[100px] h-[50px]"
                      src={product.toolImg}
                      alt=""
                    />
                  </td>
                  <td>{product.toolName}</td>
                  <td>$ {product.price}/unit</td>
                  <td>{product.quantity}/unit</td>
                  <td>{product.minOrder}/unit</td>
                  <td>
                    <label
                      htmlFor="product-delete-modal"
                      onClick={() => setProductId(product._id)}
                      className="btn btn-xs"
                    >
                      delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {productId && (
        <ProductDeleteModal
          refetch={refetch}
          productId={productId}
          setProductId={setProductId}
        />
      )}
    </div>
  );
};

export default ManageProducts;
