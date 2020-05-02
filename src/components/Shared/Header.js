import React from "react";

const Header = ({ Title }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand">
        {Title}
      </span>
    </nav>
  );
};

export default Header;
