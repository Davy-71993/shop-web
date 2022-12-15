"use client";
import React, { useEffect, useState } from "react";
import { post } from '../../../../utils/apiHandlers'

export default function Create() {

  const deletCategoryItem = (event, list, strIn, type) => {
    event.preventDefault();
    const l = list.filter((str) => str != strIn);
    if (type === "tag") {
      setFormData({ ...formData, tags: l });
    } else if (type === "category") {
      setFormData({ ...formData, categories: l });
    }
  };

  const addCategoryItem = (e, type) => {
    e.preventDefault();
    if (type === "category") {
      console.log(category);
      setFormData({
        ...formData,
        categories: [...formData.categories, category],
      });
      setCategory("");
    } else if (type === "tag") {
      console.log(tag);
      setFormData({
        ...formData,
        tags: [...formData.tags, tag],
      });
      setTag("");
    }
  };

  const postForm = async(e) => {
    e.preventDefault();
    try {
      const res = await (await post('listings', formData, '1|eqATnt4wMhNDfYgrVy3wHANbQy6kmRe8qzNnGYw9')).data
      console.log(res)
      
    } catch (error) {
      error.response ? setErrors(error.response.data) : console.log(error)
    }
  };

  const [category, setCategory] = useState("");
  const [tag, setTag] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0.0,
    description: "",
    brand: "",
    tags: [],
    categories: [],
    condition: "",
    location: {
      city: "",
      state: "",
      longitude: "",
      latitude: "",
      zip: "",
    },
  });

  return (
    <div className="w-full p-5 h-full">
      <h4 className="text-center font-bold mb-5">Product details</h4>
      <form className="mb-6">
        <div className="flex w-full flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-first-name"
            >
              Name
            </label>
            {
              errors.name &&
              <p className="text-red-500 text-xs font-light">{ errors.name[0]}</p>
            }
            <input
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Product Name"
              value={formData.name}
              onChange={(e) => {
                setFormData({ ...formData, name: e.target.value });
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-last-name"
            >
              Brand
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Product Brand Name"
              value={formData.brand}
              onChange={(e) => {
                setFormData({ ...formData, brand: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="description"
              type="text"
              placeholder="Precisily describe your product"
              value={formData.description}
              onChange={(e) => {
                setFormData({ ...formData, description: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="quantity"
            >
              Quantity
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="quantity"
              type="number"
              value={formData.quantity}
              onChange={(e) => {
                setFormData({ ...formData, quantity: e.target.value });
              }}
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-state"
            >
              Condition
            </label>
            <input
              className="block appearance-none w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 py-2 px-4 pr-8 rounded leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="grid-state"
              type="text"
              value={formData.condition}
              onChange={(e) => {
                setFormData({ ...formData, condition: e.target.value });
              }}
            />
          </div>
          <div className="w-full md:w-1/4 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-zip"
            >
              Price
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="grid-zip"
              type="number"
              value={formData.price}
              onChange={(e) => {
                setFormData({ ...formData, price: e.target.value });
              }}
            />
          </div>
        </div>
        <h2 className="px-3 font-bold mb-2">Location</h2>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="quantity"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="quantity"
              type="text"
              placeholder="City"
              value={formData.location.city}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  location: { ...location, city: e.target.value },
                });
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="quantity"
              type="text"
              placeholder="Country or State"
              value={formData.location.state}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  location: { ...location, state: e.target.value },
                });
              }}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder="90210"
              value={formData.location.zip}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  location: { ...location, zip: e.target.value },
                });
              }}
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap mt-10">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-first-name"
            >
              Categories
            </label>
            <div className="rounded  w-full">
              <div className={`flex flex-wrap`}>
                {formData.categories.map((c, index) => (
                  <button
                    key={index}
                    className="appearance-none block relative rounded mb-3 mr-2 w-fit"
                  >
                    <span className="p-2 bg-gray-200 dark:bg-slate-700 rounded text-xs">
                      {c}
                    </span>
                    <span
                      onClick={(e) => {
                        deletCategoryItem(
                          e,
                          formData.categories,
                          c,
                          "category"
                        );
                      }}
                      className="absolute bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 text-red-400 h-4 w-4 flex justify-center items-center text-xs rounded-full -right-1 -top-1 pb-1"
                    >
                      x
                    </span>
                  </button>
                ))}
              </div>
              <div className="bg-gray-300 dark:bg-slate-700 border rounded flex p-0">
                <input
                  className="appearance-none bg-gray-300 dark:bg-slate-700 rounded block w-full py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600"
                  id="grid-first-name"
                  type="text"
                  placeholder="Add Category"
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                />
                <button
                  className="rounded border-l px-2"
                  onClick={(e) => addCategoryItem(e, "category")}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs mb-2"
              htmlFor="grid-first-name"
            >
              Tags
            </label>
            <div className="rounded  w-full">
              <div className={`flex flex-wrap`}>
                {formData.tags.map((c, index) => (
                  <button
                    key={index}
                    className="appearance-none block relative rounded mb-3 mr-2 w-fit"
                  >
                    <span className="p-2 bg-gray-200 dark:bg-slate-700 rounded text-xs">
                      {c}
                    </span>
                    <span
                      onClick={(e) => {
                        deletCategoryItem(e, formData.tags, c, "tag");
                      }}
                      className="absolute bg-gray-300 dark:bg-slate-600 hover:bg-gray-400 text-red-400 h-4 w-4 flex justify-center items-center text-xs rounded-full -right-1 -top-1 pb-1"
                    >
                      x
                    </span>
                  </button>
                ))}
              </div>
              <div className="bg-gray-300 dark:bg-slate-700 border rounded flex p-0">
                <input
                  className="appearance-none bg-gray-300 dark:bg-slate-700 rounded block w-full py-2 px-4 leading-tight focus:outline-none dark:focus:bg-slate-600"
                  id="grid-first-name"
                  type="text"
                  placeholder="Add Category"
                  value={tag}
                  onChange={(e) => {
                    setTag(e.target.value);
                  }}
                />
                <button
                  className="rounded border-l px-2"
                  onClick={(e) => addCategoryItem(e, "tag")}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <button className="w-full dark:bg-slate-900 rounded dark:hover:bg-slate-700 p-3 mb-6 h" onClick={(e)=>postForm(e)}>
        Create Product
      </button>
    </div>
  );
}
