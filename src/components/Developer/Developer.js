import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLink, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Developer.css";

const Developer = (props) => {
  const { name, age, designation, image, gender, salary, twitter, website } =
    props.developer;
  return (
    <div className="col-4 ">
      <div className="card mb-3 set-width card-design">
        <div className="d-flex ">
          <div className="col-md-4">
            <img
              src={image}
              className="img-fluid rounded-start h-100"
              alt="..."
            />
          </div>
          <div className="col-md-8 card-body">
            <table>
              <tbody>
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
                  <td>${salary} per year</td>
                </tr>
              </tbody>
            </table>

            <div className="mt-3 btn-area">
              <button
                onClick={() => props.handleAddToTeam(props.developer)}
                className="btn btn-addtoteam "
              >
                <FontAwesomeIcon icon={faUser} /> Add to Team
              </button>
              <a href={website}>
                <button className="btn btn-portfolio ms-1">
                  <FontAwesomeIcon icon={faLink} /> Portfolio
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
