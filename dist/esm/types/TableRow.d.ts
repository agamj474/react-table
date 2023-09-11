import React from "react";
import TableProps from "./TableProps";
interface RowProps extends TableProps {
    row: any;
}
declare const TableRow: (props: RowProps) => React.JSX.Element;
export default TableRow;
