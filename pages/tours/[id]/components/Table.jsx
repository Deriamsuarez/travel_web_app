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
console.log(info);
  return (
    <TableUi isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>KEY</TableColumn>
        <TableColumn>VALUE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Lugar</TableCell>
          <TableCell>{info.destinationLocation}</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>País</TableCell>
          <TableCell>{info.destination}</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Precio</TableCell>
          <TableCell>{info.price}</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>Viajeros</TableCell>
          <TableCell>{info.availableSeats}</TableCell>
        </TableRow>
        <TableRow key="5">
          <TableCell>Capacidad</TableCell>
          <TableCell>{info.capacity}</TableCell>
        </TableRow>
        <TableRow key="6">
          <TableCell>Punto de encuentro</TableCell>
          <TableCell>{info.departureLocation}</TableCell>
        </TableRow>
      </TableBody>
    </TableUi>
  );
};

export default Table;
