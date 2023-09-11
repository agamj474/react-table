import React from "react";
import TableProps, { ColumnProps } from "./TableProps";
interface CellProps extends TableProps {
    column: ColumnProps;
    row: any;
}
declare const TableCell: (props: CellProps) => React.JSX.Element;
export default TableCell;
