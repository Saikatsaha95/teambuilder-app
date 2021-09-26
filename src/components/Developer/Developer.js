import React from "react";
import "./Developer.css";

const Developer = (props) => {
  const { name, age, designation, image, gender, salary, twitter, website } =
    props.developer;
  return (
    <div className="col-4 ">
      <div className="card mb-3 set-width">
        <div className="d-flex ">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8 table card-body">
            <tr>
              <th className="card-title">Name: </th>
              <td>{name}</td>
            </tr>
            <tr>
              <th className="card-title">Age: </th>
              <td>{age}</td>
            </tr>
            <tr>
              <th className="card-title">Gender: </th>
              <td>{gender}</td>
            </tr>
            <tr>
              <th className="card-title">Designation: </th>
              <td>{designation}</td>
            </tr>
            <tr>
              <th className="card-title">Salary: </th>
              <td>{salary}</td>
            </tr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
