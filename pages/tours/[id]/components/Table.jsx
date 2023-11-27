import React from "react";
import {
  Table as TableUi,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const Table = ({info}) => {

  return (
    <TableUi isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>KEY</TableColumn>
        <TableColumn>VALUE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Lugar</TableCell>
          <TableCell>{info.country}</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Precio</TableCell>
          <TableCell>{info.price}</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Viajeros</TableCell>
          <TableCell>{info.travelers.quantity}</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Capacidad</TableCell>
          <TableCell>{info.travelers.full}</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>William Howard</TableCell>
          <TableCell>Community Manager</TableCell>
        </TableRow>
      </TableBody>
    </TableUi>
  );
};

export default Table;
