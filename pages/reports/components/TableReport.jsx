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

export default function TableReport({id, headers, reports, setData }) {


  return (
      <TableUi
      id={id}
      color={"primary"}
        aria-label="Example static collection table"
      >
        <TableHeader>
          {headers.map((header, index) => (
            <TableColumn key={header}>{header}</TableColumn>
          ))}
        </TableHeader>
        <TableBody emptyContent={"No hay datos que mostrar."}>
          {reports.map((report, index) => (
            <TableRow key={index} >
              <TableCell>{report.name}</TableCell>
              <TableCell>{report.email}</TableCell>
              <TableCell>{report.phone}</TableCell>
              <TableCell>{report.amountPaid}</TableCell>
              <TableCell>{report.reservations}</TableCell>
              <TableCell>{report.paymentMethod || 'Todos'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableUi>
  );
}
