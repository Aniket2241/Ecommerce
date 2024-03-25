import React, { useState } from "react";
import "./roast.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Kids() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState(null);
  const handleSubmit = () => {
    if (name && email !== "") {
      const formData = { name, gender, email, feedback };
      localStorage.setItem("formData", JSON.stringify(formData));
      setName("");
      setGender("");
      setEmail("");
      setFeedback("");
      toast.success("Data Saved successfully !");

      return 0;
    }

    toast.warning("Fill in all fields !");
  };

  return (
    <>
      <h1 className=" underline text-center text-[20px] text-red-200 font-medium">
        Register Here
      </h1>
      <div className=" text-lg mt-[18vh] text-black font-medium flex-col flex w-fit border-2 m-auto  p-4 rounded-[12px] bg-gradient-to-r from-pink-400 via-voilet-100 to-violet-600">
        <label htmlFor="name">
          Name<b className="text-red-800">*</b>
        </label>
        <input
          type="text"
          id="name"
          className="bg-white rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value.toUpperCase())}
          required
        />
        <br />
        <div>
          <label htmlFor="fen">Gender: </label>
          <input
            type="radio"
            id="male"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="male">Male</label>
          &nbsp;{" "}
          <input
            type="radio"
            id="female"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="female">Female</label>
        </div>
        <br />
        <label htmlFor="email">
          Email<b className="text-red-800">*</b>
        </label>
        <input
          type="email"
          id="email"
          className="bg-white rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="feedback">Feedback:</label>
        <textarea
          id="feedback"
          cols="30"
          rows="4"
          className="p-[5px] text-blue-300 bg-gray-700 mt-[5px] border-2 border-blue-300"
          placeholder="Give Your valuable feedback.."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <button
          className="border-2 cursor-pointer bg-blue-400 rounded-lg mt-2 hover:text-white hover:bg-blue-500 transition-all ease-in duration-200"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}
