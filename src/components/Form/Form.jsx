import React, { useRef } from "react";
import axios from "axios";

const Form = ({ onSubmit }) => {
  const userNameInput = useRef("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(
      `https://api.github.com/users/${userNameInput.current.value}`
    );

    console.log(response.data);
    onSubmit(response.data);
    userNameInput.current.value = "";
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="GitHub username"
        ref={userNameInput}
        required
      />
      <button type="submit">Add card</button>
    </form>
  );
};

export default Form;
