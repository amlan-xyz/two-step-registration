import { useEffect, useRef } from "react";

import DataTables, { Config } from "datatables.net-dt";
const ReactDataTables = ({ ...props }: Config) => {
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    const dataTable = new DataTables(tableRef.current!, props);
    return () => {
      dataTable.destroy();
    };
  }, [props]);
  return <table ref={tableRef}></table>;
};

export default ReactDataTables;
