import React from "react";
import TableProps, { ColumnProps } from "./TableProps";

interface HeaderCellProps extends TableProps {
  header: ColumnProps;
}

const TableHeaderCell = (props: HeaderCellProps) => {
  return <th>{props.header.title}</th>;
};

export default TableHeaderCell;
