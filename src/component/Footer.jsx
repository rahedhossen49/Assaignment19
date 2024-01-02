import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-light mt-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <h3 className="text-dark">Shop</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              quisquam aut eos pariatur eius obcaecati totam, distinctio porro
              ipsam suscipit quo ab fugiat, ratione animi cumque laboriosam
              soluta, placeat libero?
            </p>
          </div>

          <div className="col">
            <h3 className="text-dark">Services</h3>
            <ul>
              <li>
                <Link className="text-dark" to="#">
                  My Account
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Services Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-dark">Contact Info</h3>
            <ul>
              <li>
                <Link className="text-dark" to="#">
                  My Account
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-dark" to="#">
                  Services Login
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3 className="text-dark ">Contact Info</h3>
            <ul>
              <li>Address: Your Address Goes Here.</li>
              <li>Phone/Fax: 0123456789</li>
              <li>Email: demo@example.com</li>
              <li>demo@example.com</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
