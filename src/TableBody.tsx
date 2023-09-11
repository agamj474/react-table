import React from "react";
import TableProps from "./TableProps";
import TableRow from "./TableRow";

const TableBody = (props: TableProps) => {
  let dataExists = props.data?.length;
  return dataExists ? (
    <tbody>
      {props.data?.map((row, i) => {
        return <TableRow key={i} {...props} row={row} />;
      })}
    </tbody>
  ) : null;
};

export default TableBody;
