"use client";
import axios from "axios";
import React, { useState } from "react";
import Container from "../../components/Styled/Container";
import { post } from "../../utils/apiHandlers";

export default function Login() {
  const submitForm = async (e) => {
    const error = {};
    if (formData.email === "") {
      error.email = "The Email address is required!";
    }
    if (formData.password === "") {
      error.password = "The password is required!";
    }

    if (error.email || error.password) {
      setError(error);
    } else {
      try {
        const res = await post('login', formData)
        console.log(res.data)
      } catch (error) {
        setError({response: error.response.data.message})
      }
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  return (
    <Container>
      <div className="w-full h-[80vh] flex justify-center items-center">
        <div className="w-full max-w-md h-fit p-5 bg-gray-200 dark:bg-slate-800  rounded">
          <h1 className="font-bold text-4xl text-center mb-3">Login</h1>
          {
            error && error.response &&
            <p className="text-red-500 text-xs text-center font-bold">{ error.response }</p>
          }
          <form>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs mb-2"
                htmlFor="email"
              >
                Email
              </label>
              {error && error.email && (
                <p className="text-red-300 text-xs font-light">{error.email}</p>
              )}
              <input
                className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-xs mb-2"
                htmlFor="password"
              >
                Password
              </label>
              {error && error.password && (
                <p className="text-red-300 text-xs font-light">
                  {error.password}
                </p>
              )}
              <input
                className="appearance-none block w-full bg-gray-300 dark:bg-slate-700 border rounded py-2 px-4 mb-3 leading-tight focus:outline-none dark:focus:bg-slate-600 focus:border-gray-500"
                id="password"
                type="password"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                }}
              />
            </div>
            <div className="w-full px-3 mb-6 mt-12 md:mb-0">
              <input
                className="appearance-none block w-full bg-green-300 hover:bg-green-500 dark:bg-blue-500 dark:hover:bg-blue-700 rounded py-2 px-4 mb-3 leading-tight focus:outline-none"
                type="button"
                value="Login"
                onClick={(e) => submitForm(e)}
              />
            </div>

            <p className="text-xs font-sm text-center ">Remember me.</p>
          </form>
        </div>
      </div>
    </Container>
  );
}
