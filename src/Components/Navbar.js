import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const product = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <nav className="max-w-7xl mx-auto w-[90%] flex justify-between items-center h-14">
      <h2
        className="font-semibold text-xl cursor-pointer"
        onClick={() => navigate("/")}>
        Redux Store
      </h2>
      <div className="space-x-7 flex font-semibold">
        <Link to="/">Home</Link>
        <Link to="/cart" className="flex items-center">
          <FontAwesomeIcon
            className="w-5 h-5 mr-2"
            icon={faCartArrowDown}
          />
          {product.length}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
