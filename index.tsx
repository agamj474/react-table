import React from "react";
import "index.css";
import TableComponent from "./TableComponent";
import TableProps from "./TableProps";

const Table = (props: TableProps) => {
  return (
    <div
      className={
        "react-table-wrapper " + props.wrapperClassName
          ? props.wrapperClassName
          : ""
      }
    >
      <TableComponent {...props} />
    </div>
  );
};

export default Table;
