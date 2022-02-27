import React, { FunctionComponent } from "react";
import { Accordion } from "react-bootstrap";
import FilterBTN from "../FilterBTN";

const Gender: FunctionComponent = () => {
  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Cinsiyet</Accordion.Header>
      <Accordion.Body>
        <FilterBTN />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Gender;
