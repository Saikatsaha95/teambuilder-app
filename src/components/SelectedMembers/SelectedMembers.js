import React from "react";

import "./SelectedMembers.css";

const SelectedMembers = (props) => {
  const { name, image, twitter } = props.developer;
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex align-items-center">
          <div className="col-md-4">
            <img src={image} className="selected-img" alt="" />
          </div>
          <div className="col-md-8 ms-1 text-center">
            <h6>Name: {name}</h6>
            <a href={twitter}>
              <button className="btn btn-info text-white">
                <i class="fab fa-twitter me-2"></i>
                Contact Me
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMembers;
