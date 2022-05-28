import axios from "../../utility/axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleAddProduct = async (data) => {
    const { toolName, toolDescription, minOrder, quantity, price, postedImg } =
      data;
    const image = postedImg[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_STORAGE_KEY}`;
    const { data: imgPostData } = await axios.post(url, formData);
    const storedImgUrl = imgPostData.data.url;
    const product = {
      toolName,
      toolDescription,
      minOrder,
      quantity,
      price,
      toolImg: storedImgUrl,
    };
    const { data: postedProduct } = await axios.post("products", product);
    if (postedProduct._id) {
      reset();
      toast.success("product added successfully");
    }
  };
  return (
    <div>
      <h1 className="text-4xl text-center font-bold">
        Dashboard (Add Product)
      </h1>

      <div className="">
        <form onSubmit={handleSubmit(handleAddProduct)}>
          <h4 className="text-xl text-center mt-5">Add Product</h4>
          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("toolName", { required: "required" })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.toolName?.message && (
              <p className="text-red-600">{errors.toolName?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              type="text"
              placeholder="Type here"
              {...register("toolDescription", { required: "required" })}
              className="textarea  input-bordered w-full max-w-lg"
            />
            {errors.toolDescription?.message && (
              <p className="text-red-600">{errors.toolDescription?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              {...register("minOrder", { required: "required" })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.minOrder?.message && (
              <p className="text-red-600">{errors.minOrder?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Available Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Type here"
              {...register("quantity", { required: "required" })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.quantity?.message && (
              <p className="text-red-600">{errors.quantity?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">
                Product Price <small>(per unit)</small>
              </span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              {...register("price", { required: "required" })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.price?.message && (
              <p className="text-red-600">{errors.price?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-lg mx-auto">
            <label className="label">
              <span className="label-text">Product Image</span>
            </label>
            <input
              type="file"
              {...register("postedImg", { required: "required" })}
              className="input input-bordered w-full max-w-lg"
            />
            {errors.postedImg?.message && (
              <p className="text-red-600">{errors.postedImg?.message}</p>
            )}
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-success w-1/2 mx-auto block my-2 text-white font-bold"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
