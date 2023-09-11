import React from "react";
import TableProps from "./TableProps";
import TableHeaderCell from "./TableHeaderCell";

const TableHeader = (props: TableProps) => {
  return (
    <thead>
      <tr>
        {props.columns?.map((header, i) => {
          return <TableHeaderCell key={i} header={header} {...props} />;
        })}
      </tr>{" "}
    </thead>
  );
};

export default TableHeader;
