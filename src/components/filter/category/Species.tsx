import React, { FunctionComponent } from "react";
import { Accordion } from "react-bootstrap";
import FilterBTN from "../FilterBTN";

const Species: FunctionComponent = () => {
  return (
    <Accordion.Item eventKey="3">
      <Accordion.Header>Tür</Accordion.Header>
      <Accordion.Body>
        <FilterBTN index={0} name="" />
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Species;
