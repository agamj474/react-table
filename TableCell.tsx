import React from "react";
import TableProps, { ColumnProps } from "./TableProps";

interface CellProps extends TableProps {
  column: ColumnProps;
  row: any;
}

const TableCell = (props: CellProps) => {
  return <tr>{props.row[props.column.name]}</tr>;
};

export default TableCell;
