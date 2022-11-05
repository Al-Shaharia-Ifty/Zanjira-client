import React, { useEffect } from "react";

const About = () => {
  // title name
  useEffect(() => {
    document.title = "About Us - Zanjira";
  }, []);
  return (
    <div>
      <h2>About Us</h2>
    </div>
  );
};

export default About;
