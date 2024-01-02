import React from "react";

const Add = () => {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-6">
          <div className="position-relative">
            <img src="/src/assets/images/3.webp" alt="" />
            <div className="position-absolute add-pos ps-5">
              <h1 className="title">
                Smart Watch For <br /> Your Hand
              </h1>
              <h2 className="price">From $29.00</h2>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="col-md-6 mb-3">
            <div className="position-relative">
              <img src="/src/assets/images/4.webp" alt="" />
              <div className="position-absolute add-pos ps-5">
                <h1 className="title">Headphones</h1>
                <h2 className="price">From $29.00</h2>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="position-relative">
              <img src="/src/assets/images/5.webp" alt="" />
              <div className="position-absolute add-pos ps-5">
                <h1 className="title">Smartphone</h1>
                <h2 className="price">From $29.00</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
