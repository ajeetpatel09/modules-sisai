import autoTable from "jspdf-autotable";
import style from "./pdfCreation.module.css";
import jsPDF from "jspdf";
import { NavLink } from "react-router-dom";
import { Table } from "antd";
import { dataSource, columns } from "./table-data.types";

const PdfCreation = () => {
  const downloadPdf = () => {
    const doc = new jsPDF();
    doc.setFont("Poppins");

    const myArr = dataSource.map((cur: any, index: number) => [
      index + 1,
      cur.name,
      cur.age,
      cur.address,
    ]);

    autoTable(doc, {
      head: [["Serial No.", "Name", "Age", "Address"]],
      body: myArr,
    });

    doc.save("table_data.pdf");
  };

  return (
    <>
      <NavLink to="/">
        <button>Go Back</button>
      </NavLink>

      <h1>Pdf Creation</h1>

      <div className={style.parent}>
        <div className={style.firstChild}>
          <button onClick={downloadPdf}>DownLoad Table as PDF</button>
        </div>
        <div className={style.secondChild}>
          <Table dataSource={dataSource} columns={columns} />;
        </div>
      </div>
    </>
  );
};

export default PdfCreation;
