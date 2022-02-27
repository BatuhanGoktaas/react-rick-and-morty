import React, { FunctionComponent } from "react";
import Gender from "components/filter/category/Gender";
import Species from "components/filter/category/Species";
import Status from "components/filter/category/Status";
import { Accordion } from "react-bootstrap";

const Filter: FunctionComponent = () => {
  return (
    <div className="col-3">
      <div className="text-center fw-bold fs-4 mb-2">Filtrele</div>
      <div style={{ cursor: "pointer" }} className="text-center text-primary text-decoration-underline mb-2">
        Filtrelemeyi Temizle
      </div>
      <Accordion>
        <Status />
        {/* <Gender />
        <Species /> */}
      </Accordion>
    </div>
  );
};

export default Filter;
