import React, { FunctionComponent } from "react";
import { Accordion } from "react-bootstrap";
import FilterBTN from "../FilterBTN";

const Status: FunctionComponent = () => {
  const status: Array<string> = ["Canlı", "Ölü", "Bilinmiyor"];
  return (
    <Accordion.Item eventKey="0">
      <Accordion.Header>Durum</Accordion.Header>
      <Accordion.Body>
        {status.map((item, index) => (
          <FilterBTN key={index} name="status" index={index} item={item} />
        ))}
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Status;
