"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../layout";
import tours from "@/utils/tourData";
import Table from "./components/Table";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  ScrollShadow,
} from "@nextui-org/react";
import EllipsisVerticalIcon from "@heroicons/react/24/outline/EllipsisVerticalIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useTour } from "@/connection";
import { useParams } from "next/navigation";
import Image from "./components/Image";

const imagesArray = [
  { label: "imagen principal", order: 1 },
  { label: "Agregar imagen", order: 2 },
  { label: "Agregar imagen", order: 3 },
  { label: "Agregar imagen", order: 4 },
];

const CRUDButton = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly color="" aria-label="Like">
          <EllipsisVerticalIcon />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Example with disabled actions"
        disabledKeys={["edit", "delete"]}
      >
        <DropdownItem key="new">Editar</DropdownItem>
        <DropdownItem key="edit">Desactivar inscripción</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Eliminar tour
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default function index({ params }) {
  const getTourIdFromCurrentUrl = () => {
    try {
      const urlObj = new URL(window.location.href);
      const pathSegments = urlObj.pathname.split("/");
      const id = pathSegments[pathSegments.indexOf("tours") + 1];
      return id;
    } catch (error) {
      console.error("Error getting ID from current URL:", error);
      return null;
    }
  };

  const tourId = getTourIdFromCurrentUrl();
  const tourRequest = useTour(tourId);

  const tour = tourRequest.data;



  console.log(tour);
  return (
    <Layout>
      {tourRequest.isSuccess && (
        <main className="mx-auto container  px-6 py-6 grid grid-cols-12 gap-8">
          <div className="col-span-full md:col-span-4 bg-white rounded-xl flex flex-col gap-4">
            <div className="flex justify-between">
              <h3 className="text-3xl font-bold">{tour.name}</h3>
              <CRUDButton />
            </div>
            <Table info={tour} />
          </div>

          <div className="col-span-full md:col-span-8 w-full grid grid-cols-2 gap-4">
            {imagesArray.map((image, index) => 
              <Image
              images={tour.images}
                key={index}
                id={tour.id}
                order={image.order}
                label={image.label}
              />
            )}
            <ScrollShadow
              hideScrollBar
              className=" bg-[#f5f5f5] rounded-xl p-4 shadow-md  col-span-full max-h-[250px]"
            >
              <div className="col-span-4 text-justify">{tour.description}</div>
            </ScrollShadow>
          </div>

          {/* <div className="col-span-full flex justify-between">
          <Button 
            startContent={<ChevronLeftIcon className="w-4" />}
            color="primary"
            variant="flat"
          >
            Viaje a colombia
          </Button>
          <Button
            endContent={<ChevronRightIcon className="w-4" />}
            color="primary"
            variant="flat"
          >
            Viaje a Chile
          </Button>
        </div> */}
        </main>
      )}
    </Layout>
  );
}
