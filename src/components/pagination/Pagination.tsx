import React, { Dispatch, SetStateAction, FunctionComponent } from "react";
import ReactPaginate from "react-paginate";
import styles from "components/pagination/Pagination.module.scss";

import { ICharacterInfo } from "interfaces/Character";

interface Props {
  info: ICharacterInfo | undefined;
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const Pagination: FunctionComponent<Props> = (props) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      forcePage={props.pageNumber === 1 ? 0 : props.pageNumber - 1}
      pageCount={props.info?.pages || 1}
      nextLabel="Sonraki"
      nextClassName="btn btn-light fs-5 next"
      previousLabel="Önceki"
      previousClassName="btn btn-light fs-5 prev"
      pageClassName="page-item"
      pageLinkClassName={"page-link"}
      onPageChange={(data) => {
        props.setPageNumber(data.selected + 1);
      }}
      activeClassName="active"
    />
  );
};

export default Pagination;
