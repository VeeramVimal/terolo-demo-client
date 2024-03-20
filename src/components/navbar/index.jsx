import React from "react";

const Navbar = ({ children, navBarStyle }) => {
  return (
    <nav
      className={`bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded ${navBarStyle}`}
    >
      <div class="container flex flex-wrap justify-between items-center mx-auto  ">
        {children}
      </div>
    </nav>
  );
};

export default Navbar;
