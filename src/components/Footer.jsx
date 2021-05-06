import React from "react";

const date = new Date();
const currentYear = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Developed By Yash Edakhe</p>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
}

export default Footer;
