import React from "react";
import TableProps, { ColumnProps } from "./TableProps";
interface HeaderCellProps extends TableProps {
    header: ColumnProps;
}
declare const TableHeaderCell: (props: HeaderCellProps) => React.JSX.Element;
export default TableHeaderCell;
