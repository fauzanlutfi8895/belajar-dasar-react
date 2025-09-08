import React, { useState } from "react";

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: "",
    message: "",
  });

  function handleName(e) {
    setContact({ ...contact, name: e.target.value }); //target merujuk kepada element
  }

  // e merujuk kepada changeEvent, yaitu onChange namun jika pakai target artinya meminta elemen nya
  //   function handleMessage(e) {
  //     setContact({ ...contact, message: e.target.value });
  //   }
  return (
    <div>
      <h1>Contact Form</h1>
      <form action="">
        <input type="text" placeholder="name" value={contact.name} onChange={handleName} />
        <br />
        {/* Kalau tidak di buat spread syntaxt, akan menimpa yang ada dan menghapus yg sebelumnya */}
        <input type="text" placeholder="message" value={contact.message} onChange={e => setContact({ ...contact, message: e.target.value })} /> 
      </form>
      <h1>Contact detail</h1>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  );
};

export default ContactForm;
