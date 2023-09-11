import React from "react";
import TableProps from "./TableProps";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableComponent = (props: TableProps) => {
  let renderTable = props.columns?.length;
  return (
    <div className="react-table-inner">
      {renderTable ? (
        <table className="react-table">
          <TableHeader {...props} />
          <TableBody {...props} />
        </table>
      ) : null}
    </div>
  );
};

export default TableComponent;
