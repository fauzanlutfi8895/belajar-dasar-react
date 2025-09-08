import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    message: "",
  });
  const handleName = e => {
    setContact({ ...contact, name: e.target.value });
  };
  const handleMessage = e => {
    setContact({ ...contact, message: e.target.value });
  };
  return (
    <div>
      <input type="text" onChange={handleName} /> <br />
      <input type="text" onChange={handleMessage} />
      <div>
        <h2>Name: {contact.name}</h2>
        <h2>Message: {contact.message}</h2>
      </div>
    </div>
  );
};

export default ContactForm;
