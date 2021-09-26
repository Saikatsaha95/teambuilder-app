import React, { useEffect, useState } from "react";
import Developer from "../Developer/Developer";
import "./Main.css";

const Main = () => {
  const [developers, setDevelopers] = useState([]);
  const [addDevelopers, setAddDevelopers] = useState([]);
  useEffect(() => {
    fetch("./developers.JSON")
      .then((res) => res.json())
      .then((data) => setDevelopers(data));
  }, []);

  const handleAddToTeam = (newDeveloper) => {
    const addNewDeveloper = [...addDevelopers, newDeveloper];
    setAddDevelopers(addNewDeveloper);
  };

  const costReducer = (preCost, currCost) => preCost + currCost.salary;

  const totalCost = addDevelopers.reduce(costReducer, 0);
  return (
    <div>
      <h2 className="text-center text-white">Build Your Desire Team</h2>
      <h4 className="text-center text-white">Budget: 1 million (yearly)</h4>
      <div className="d-flex justify-content-center mt-4">
        <h4 className="me-5 bg-total-member">
          Total Members: {addDevelopers.length}
        </h4>
        <h4 className="bg-total-cost">Total Cost: ${totalCost}</h4>
      </div>

      <div className="mt-5 ms-5 ">
        <div className="row">
          <div className="col-md-9">
            <div className="card-container border-end">
              <div className="row g-3 me-3">
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
            <h2>I am small</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
