import React from "react";
import {
  Table as TableUi,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { format } from "date-fns";

const Table = ({info}) => {
console.log(info);
  return (
    <div className="flex flex-col gap-8">
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
          <TableCell>Viajeros inscritos</TableCell>
          <TableCell>{info.passengers}</TableCell>
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

    <TableUi isStriped aria-label="table schedules">
      <TableHeader>
        <TableColumn>KEY</TableColumn>
        <TableColumn>VALUE</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Encuentro</TableCell>
          <TableCell>{format(new Date(info.schedule.meeting), 'dd/MM/yy hh:mmaa')}</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Inicio</TableCell>
          <TableCell>{format(new Date(info.schedule.departure), 'dd/MM/yy hh:mmaa')}</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Regreso</TableCell>
          <TableCell>{format(new Date(info.schedule.return), 'dd/MM/yy hh:mmaa') }</TableCell>
        </TableRow>
      </TableBody>
    </TableUi>

    </div>
  );
};

export default Table;
