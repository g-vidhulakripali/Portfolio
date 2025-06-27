import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full py-4 ">
      <div className="flex justify-center items-center">
        <span className="text-sm text-white bg-none">&copy; {new Date().getFullYear()} Vidhula Kripali Ganesh Babu. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
