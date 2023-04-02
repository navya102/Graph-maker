import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { useNavigate, useLocation } from "react-router-dom";

const EnterCoordinates = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [labels, setLabels] = useState();
  const [data, setData] = useState();
  const [labelsarr, setLabelsarr] = useState([]);
  const [dataarr, setDataarr] = useState([]);

  const graph_data = location.state;

  const graph = () => {
    assign();
    navigate("/graph", { state: graph_data });
  };

  const myfunction = () => {
    setLabelsarr([...labelsarr, labels]);
    setDataarr([...dataarr, data]);
    setLabels("");
    setData("");
  };

  const assign = () => {
    graph_data.data.labels = labelsarr;
    graph_data.data.datasets[0].data = dataarr;
    console.log(graph_data);
  };

  return (
    <div style={{ width: "100%" }}>
      <Card style={{ width: "50%", margin: "auto", marginTop: "5%" }}>
        <Card.Body>
          <Form style={{ padding: "7%" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Card.Title style={{ textAlign: "center" }}>
                Graph Coordinates
              </Card.Title>
              <Form.Label style={{ textAlign: "center" }}>Point 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Coordinate"
                onChange={(e) => setLabels(e.target.value)}
                value={labels}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{ textAlign: "center" }}>Point 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Second Coordinate"
                value={data}
                onChange={(e) => setData(e.target.value)}
              />
            </Form.Group>
            <div className="btn" style={{ width: "100%" }}>
              <Button
                variant="primary"
                style={{ width: "30%", margin: "auto !important" }}
                type="button"
                onClick={myfunction}
              >
                Submit
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="btn" style={{ width: "100%" }}>
        <Button
          variant="secondary"
          style={{ width: "15%", margin: "auto !important", marginTop: "5%" }}
          type="submit"
          onClick={graph}
        >
          Get Graph
        </Button>
      </div>
    </div>
  );
};
export default EnterCoordinates;
