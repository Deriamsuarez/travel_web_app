import React, { useState } from "react";
import Layout from "../tours/layout";
import { useReport, useReports } from "@/connection/reports";
import Table from "./components/Table";
import TableReport from "./components/TableReport";
import { Button } from "@nextui-org/react";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const principalReportHeader = [
  "ID",
  "NOMBRE",
  "ENCUENTRO",
  "RESERVACIONES",
  "CAPACIDAD",
  "INSCRIPCIONES %",
];

const reportHeader = [
    'NAME',
    'EMAIL',
    'PHONE',
    'MONTO PAGADO',
    'RESERVACIONES',
    'METODOS DE PAGO'
]

const index = () => {
  const [data, setData] = useState(null);
  const reports = useReports();
  const report = useReport(data?.excursion?.id);
  return (
    <Layout>
      <main className="mx-auto container p-6 flex flex-col gap-8">
        <div className="flex items-center ">
          <div className="w-full text-3xl font-medium min-w-[230px] flex items-center justify-between gap-2">
            <span>Reportes</span>
            <ReactHTMLTableToExcel
              id="botonPrincipal"
              table="principalReport"
              filename="Reporte"
              sheet="pagina 1"
              buttonText="Reporte general"
              className="bg-primary rounded-md px-4 py-1 font-bold text-[14px] uppercase text-white "
            />
          </div>
        </div>
        {reports.isSuccess && (
          <Table
            id={"principalReport"}
            headers={principalReportHeader}
            reports={reports.data}
            setData={setData}
          />
        )}
        {data && (
          <>
            <div className="w-full text-3xl font-medium min-w-[230px] flex items-center justify-between gap-2">
              <span>Reporte de {data?.excursion?.name}</span>
              <ReactHTMLTableToExcel
                id="botonTravel"
                table="travelReport"
                filename="Travel"
                sheet="pagina 1"
                buttonText="Exportar reporte"
                className="bg-primary rounded-md px-4 py-1 font-bold text-[14px] uppercase text-white "
              />
            </div>
            {report.isSuccess && (
              <TableReport
                id={"travelReport"}
                headers={reportHeader}
                reports={report.data || []}
              />
            )}
          </>
        )}
      </main>
    </Layout>
  );
};

export default index;
