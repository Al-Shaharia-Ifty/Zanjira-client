import React, { useEffect } from "react";

const Contact = () => {
  // title name
  useEffect(() => {
    document.title = "Contact Us - Zanjira";
  }, []);
  return (
    <div>
      <h2>Contact Us</h2>
    </div>
  );
};

export default Contact;
