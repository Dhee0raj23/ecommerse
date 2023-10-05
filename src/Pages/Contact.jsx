import "./Contact.css";
import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const numberHandler = (e) => {
    setNumber(e.target.value);
  };

  const addContactHandler = async (formData) => {
    try {
      const response = await fetch(
        "https://react-http-d286a-default-rtdb.firebaseio.com/contacts.json",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add contact.");
      }

      setName("");
      setEmail("");
      setNumber("");
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      number,
    };
    addContactHandler(formData);
  };

  return (
    <div className="black">
      <div className="form-container">
        <h1 className="form-title">Let's talk</h1>
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            placeholder="Name"
            className="inputs"
            onChange={nameHandler}
            value={name}
          />
          <input
            type="email"
            placeholder="Email"
            className="inputs"
            onChange={emailHandler}
            value={email}
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="inputs"
            onChange={numberHandler}
            value={number}
          />
          <div>
            <button className="contactButton" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
