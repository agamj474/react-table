import React from "react";
import TableProps, { ColumnProps } from "./TableProps";

interface CellProps extends TableProps {
  column: ColumnProps;
  row: any;
}

const TableCell = (props: CellProps) => {
  return <td>{props.row[props.column.name]}</td>;
};

export default TableCell;
