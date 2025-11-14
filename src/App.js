import { useState } from "react";
import "./styles.css";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phoneNo: "",
  });
  const [section, setSection] = useState("first");

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form
        action="#"
        className="border-2 border-gray-300 rounded-lg shadow-md p-6 bg-white w-full max-w-md space-y-6"
      >
        {/* FIRST SECTION */}
        <div
          className={`first bg-red-100 p-4 rounded-md flex flex-col gap-3 transition-all duration-300 ${
            section === "first" ? "block" : "hidden"
          }`}
        >
          <label htmlFor="name" className="font-medium text-gray-700">
            Name:
          </label>
          <input
            required={true}
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-300 outline-none"
            type="text"
            name="name"
            id="name"
          />

          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 rounded"
            onClick={() => setSection("second")}
          >
            Forward
          </button>
        </div>

        {/* SECOND SECTION */}
        <div
          className={`second bg-red-100 p-4 rounded-md flex flex-col gap-3 transition-all duration-300 ${
            section === "second" ? "block" : "hidden"
          }`}
        >
          <label htmlFor="email" className="font-medium text-gray-700">
            Email:
          </label>
          <input
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-300 outline-none"
            type="text"
            name="email"
            id="email"
          />
          <div className="flex gap-3">
            <button
              className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              onClick={() => setSection("third")}
            >
              Forward
            </button>
            <button
              onClick={() => setSection("first")}
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
            </button>
          </div>
        </div>

        {/* THIRD SECTION */}
        <div
          className={`third bg-red-100 p-4 rounded-md flex flex-col gap-3 transition-all duration-300 ${
            section === "third" ? "block" : "hidden"
          }`}
        >
          <label htmlFor="tel" className="font-medium text-gray-700">
            Phone:
          </label>
          <input
            className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-red-300 outline-none"
            type="tel"
            name="tel"
            id="tel"
          />

          <div className="flex gap-3">
            <button
              onClick={() => setSection("second")}
              className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
            >
              Back
            </button>
            <button
              onClick={() =>
                alert(`Thanks for filling the form, Mr. ${form.name}`)
              }
              className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
