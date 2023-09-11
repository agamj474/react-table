import React from "react";
import TableProps from "./TableProps";
import TableCell from "./TableCell";

interface RowProps extends TableProps {
  row: any;
}

const TableRow = (props: RowProps) => {
  return (
    <tr>
      {props.columns?.map((column, i) => {
        return <TableCell key={i} column={column} {...props} />;
      })}
    </tr>
  );
};

export default TableRow;
