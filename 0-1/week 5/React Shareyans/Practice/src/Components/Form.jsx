import React, { useState } from "react";

const Form = () => {
  const [username, setusername] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setusername("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}>
        <div className="flex flex-col">
          <label>enter your input</label>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
            placeholder="Enter Here"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-3 text-xl font-semibold bg-emerald-600 rounded-2xl">
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
