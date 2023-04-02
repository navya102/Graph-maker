import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import { useNavigate } from "react-router-dom";

const Values = () => {
  const [type, setType] = useState("");
  const [label, setLabel] = useState("");
  const navigate = useNavigate();

  const addpoints = () => {
    navigate("/enterCoordinates", {
      state: {
        type: type, // Show a bar chart
        data: {
          labels: [2012, 2013, 2014, 2015, 2016], // Set X-axis labels
          datasets: [
            {
              label: label, // Create the 'Users' dataset
              data: [120, 60, 50, 180, 120], // Add data to the chart
            },
          ],
        },
      },
    });

    console.log(label);
  };

  return (
    <>
      <div style={{ padding: "6%" }}>
        <h1 style={{ fontSize: "110px", color: "white", marginBottom: "5%" }}>
          Get your Graph
        </h1>

        <Form.Select
          aria-label="Default select example"
          onChange={(e) => setType(e.target.value)}
        >
          <option>Open this select menu</option>
          <option value="bar">bar</option>
          <option value="line">line</option>
          <option value="pie">pie</option>
          <option value="polarArea">polarArea</option>
          <option value="doughnut">doughnut</option>
          <option value="radar">radar</option>
        </Form.Select>
        <div>
          <InputGroup
            className="mb-3"
            style={{ paddingTop: "10%", width: "100%" }}
          >
            <InputGroup.Text id="basic-addon1">
              Enter the title of the graph
            </InputGroup.Text>
            <Form.Control
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setLabel(e.target.value)}
            />
          </InputGroup>
        </div>
      </div>
      <div className="btn" style={{ width: "100%" }}>
        <Button
          type="button"
          variant="secondary"
          style={{ width: "10%", margin: "auto !important" }}
          onClick={addpoints}
        >
          Add point
        </Button>
      </div>
    </>
  );
};

export default Values;
