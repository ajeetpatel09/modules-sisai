import { Table } from "antd";
import { columns, dataSource } from "./excel-data.types";
import { NavLink } from "react-router-dom";
import XLSXStyle from "xlsx-js-style";
import style from "./excel.module.css";

const ExcelSheet = () => {
  const downloadExcel = () => {
    const myArr = dataSource.map((cur: any, index: number) => [
      index + 1,
      cur.name,
      cur.age,
      cur.address,
    ]);

    const data = [['Serial No.', 'Name', 'Age', 'Address'], ...myArr];

    const ws = XLSXStyle.utils.aoa_to_sheet(data);

    const wb = XLSXStyle.utils.book_new();
    XLSXStyle.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSXStyle.writeFile(wb, "report_file.xlsx");
  };
  return (
    <>
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>
      <h3>ExcelSheet</h3>

      <div className={style.parent}>
        <div className={style.firstChild}>
          <button onClick={downloadExcel}>DownLoad Table as Excel Sheet</button>
        </div>
        <div className={style.secondChild}>
          <Table dataSource={dataSource} columns={columns} />;
        </div>
      </div>
    </>
  );
};

export default ExcelSheet;
