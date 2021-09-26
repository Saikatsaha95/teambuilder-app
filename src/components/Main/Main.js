import React, { useEffect, useState } from "react";
import Developer from "../Developer/Developer";
import SelectedMembers from "../SelectedMembers/SelectedMembers";
import "./Main.css";

const Main = () => {
  const [developers, setDevelopers] = useState([]);
  const [addDevelopers, setAddDevelopers] = useState([]);

  //fetching data from JSON
  useEffect(() => {
    fetch("./developers.JSON")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  const handleAddToTeam = (newDeveloper) => {
    const addNewDeveloper = [...addDevelopers, newDeveloper];
    setAddDevelopers(addNewDeveloper);
  };

  //calculating the cost
  const costReducer = (preCost, currCost) => preCost + currCost.salary;

  const totalCost = addDevelopers.reduce(costReducer, 0);
  return (
    <div>
      <h2 className="text-center text-white">Build Your Web Team</h2>
      <h4 className="text-center text-white">Budget: $1 million (yearly)</h4>
      <div className="d-flex justify-content-center mt-4">
        <h4 className="me-5 bg-total-member">
          Total Members: {addDevelopers.length}
        </h4>
        <h4 className="bg-total-cost">Total Cost: ${totalCost}</h4>
      </div>
      {/* creating the layout */}
      <div className="mt-5 ms-5 ">
        <div className="row">
          <div className="col-md-9">
            <div className="card-container  border-end">
              {/* Creating the cards */}
              <div className="row g-3 me-2">
                {developers.map((developer) => (
                  <Developer
                    key={developer.id}
                    handleAddToTeam={handleAddToTeam}
                    developer={developer}
                  ></Developer>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <h3 className="text-white text-center">Your Team members</h3>
            {/* Adding the selected members */}
            <div className="mt-3 ">
              <ul className="mx-auto">
                {addDevelopers.map((developer) => (
                  <li className="card select-developer-style mx-auto">
                    <SelectedMembers
                      key={developer.id}
                      developer={developer}
                    ></SelectedMembers>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
