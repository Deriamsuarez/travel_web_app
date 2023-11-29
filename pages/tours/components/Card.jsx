import React from "react";
import {
  Card as CardUi,
  CardBody,
  Image,
  Button,
  Chip,
} from "@nextui-org/react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { formatDistance } from "date-fns";
import { es } from "date-fns/locale";

const Card = ({ info }) => {
  const router = useRouter();

  const timeDistance = formatDistance(
    new Date(info.schedule.departure),
    new Date(info.schedule.return),
    { locale: es }
  );

  return (
    <CardUi
      className="w-full"
      shadow="sm"
      isPressable
      onPress={() => router.push(`/tours/${info.id}`)}
    >
      <CardBody className="overflow-visible p-0">
        <Image
          src="https://www.blogdelfotografo.com/wp-content/uploads/2014/08/61.jpg"
          shadow="sm"
          radius="lg"
          width="100%"
          className="w-full object-cover h-[140px]"
        />
        <div className="p-4  items-center flex justify-between">
          <div className="leading-4">
            <h3 className="font-bold text-md">{info.name}</h3>
            <span className="font-thin text-[12px] tracking-tighter	">
              {info.destination}
            </span>
          </div>
          <Chip
            startContent={<MapPinIcon className="w-4 h-4" />}
            color="primary"
            variant="bordered"
          >
            {info.destinationLocation}
          </Chip>
        </div>

        <div className="p-4 flex justify-between text-[#607D8A]">
          <div className="leading-2 flex flex-col items-center">
            <span className="font-thin text-[14px] tracking-tighter	">
              Viajeros
            </span>
            <h3 className="font-medium text-green-600 ">
              {info.capacity - info.availableSeats}<span className="font-light text-gray-600">/{info.capacity} </span>{" "}
            </h3>
          </div>
          <div className="leading-2 flex flex-col items-center">
            <span className="font-thin text-[14px] tracking-tighter	">
              Tiempo
            </span>
            <h3 className="font-medium">{timeDistance}</h3>
          </div>
          <div className="leading-2 flex flex-col items-center">
            <span className="font-thin text-[14px] tracking-tighter	">
              Disponibilidad
            </span>
            <div className="flex gap-2 items-center">
              <div className="w-2 h-2 bg-green-600 rounded-full" />
              <h3 className="font-medium">Sí</h3>
            </div>
          </div>
        </div>
      </CardBody>
    </CardUi>
  );
};

export default Card;
