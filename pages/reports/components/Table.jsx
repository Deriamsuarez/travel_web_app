import React from "react";
import {
  Table as TableUi,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { format } from "date-fns";

export default function Table({id, headers, reports, setData }) {


  return (
      <TableUi
        id={id}
        color={"primary"}
        selectionMode="single"
        aria-label="Example static collection table"
      >
        <TableHeader>
          {headers.map((header) => (
            <TableColumn key={header}>{header}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent={"No hay datos que mostrar."}>
          {reports.map((report) => (
            <TableRow key={report.excursion.id} onClick={setData ? () => setData(report) : null }>
              <TableCell>{report.excursion.id}</TableCell>
              <TableCell>{report.excursion.name}</TableCell>
              <TableCell>
                {format(new Date(report.excursion.departure), "dd/mm/yyyy aa")}
              </TableCell>
              <TableCell>{report.totalReservations}</TableCell>
              <TableCell>{report.excursion.capacity}</TableCell>
              <TableCell>{report.totalSoldPercent}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableUi>
  );
}
