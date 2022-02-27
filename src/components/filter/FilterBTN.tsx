import React, { FunctionComponent } from "react";

interface Props {
  index?: number;
  name?: string;
  item?: string;
}

const FilterBTN: FunctionComponent<Props> = (props) => {
  return (
    <div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name={props.name} id={`${props.name}-${props.index}`} />
        <label className="btn btn-outline-primary" htmlFor={`${props.name}-${props.index}`}>
          {props.item}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;
