import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bool, date, number, object, string } from "yup";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useUpdateTour } from "@/connection";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";

const schema = object().shape({
  name: string().required("Name is required"),
  capacity: number()
    .min(5, "Minimo 5 personas")
    .required("Capacity is required"),
  destination: string().required("El destino es requerido"),
  destinationLocation: string().required("El destino es requerido"),
  price: number().min(10, "Precio minimo 10").required("Price is required"),
  departureLocation: string().required("Indique el lugar de encuentro"),
  description: string(),
  isPublic: bool(),
  isActive: bool(),
  schedule: object({
    meeting: date().required("Requerido"),
    departure: date().required("Requerido"),
    return: date().required("Requerido"),
  }),
});

const countries = [
  "República Dominicana",
  "Estados Unidos",
  "Canadá",
  "México",
  "Brasil",
  "Argentina",
  "España",
  "Francia",
  "Alemania",
  "Italia",
  "Reino Unido",
];

export default function UpdateTourModal({
  isOpen,
  onOpen,
  onOpenChange,
  data,
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const queryClient = useQueryClient();

  const { mutate } = useUpdateTour(data.id);


  const onSubmit = (payload) => {

    mutate(payload, {
      onSuccess: (data) => {
        queryClient.invalidateQueries({
          queryKey: ["fetchExcursion"],
        });
        toast.success("El tour se ha actualizado correctamente");
        reset();
        onOpenChange(false);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    });
  };

  return (
    <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1">
              Editar tour
              <Divider />
            </ModalHeader>
            <ModalBody className="grid grid-cols-6 gap-4">
              <Input
                autocomplete="off"
                className="col-span-4"
                type="text"
                label="Nombre"
                radius="sm"
                labelPlacement="outside"
                placeholder="Tour name"
                {...register("name")}
                isInvalid={Boolean(errors.name)}
                errorMessage={errors.name?.message}
                defaultValue={data.name}
              />
              <Input
                className="col-span-2"
                autocomplete="off"
                type="number"
                label="Capacidad"
                radius="sm"
                labelPlacement="outside"
                placeholder="Viajeros"
                {...register("capacity")}
                isInvalid={Boolean(errors.capacity)}
                errorMessage={errors.capacity?.message}
                defaultValue={data.capacity}
              />
              <Input
                autocomplete="off"
                className="col-span-2"
                type="text"
                label="Destino"
                radius="sm"
                labelPlacement="outside"
                placeholder="Lugar de destino principal"
                {...register("destinationLocation")}
                isInvalid={Boolean(errors.destinationLocation)}
                errorMessage={errors.destinationLocation?.message}
                defaultValue={data.destinationLocation}
              />
              <Select
                label="País de destino"
                className="col-span-2"
                radius="sm"
                labelPlacement="outside"
                placeholder="Seleccione un país"
                {...register("destination")}
                isInvalid={Boolean(errors.destination)}
                errorMessage={errors.destination?.message}
                defaultValue={data.destination}
                defaultSelectedKeys={[data.destination]}
              >
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </Select>
              <Input
                className="col-span-2"
                autocomplete="off"
                type="number"
                label="Costo"
                radius="sm"
                labelPlacement="outside"
                placeholder="Monto"
                {...register("price")}
                isInvalid={Boolean(errors.price)}
                errorMessage={errors.price?.message}
                defaultValue={data.price}
                startContent={
                  <span className="text-gray-400 text-[12px]">$</span>
                }
              />
              <Input
                autocomplete="off"
                className="col-span-3"
                type="datetime-local"
                label="Fecha y hora de inicio"
                radius="sm"
                labelPlacement="outside"
                placeholder="hour"
                {...register("schedule.departure")}
                isInvalid={Boolean(errors.schedule?.departure)}
                errorMessage={errors.schedule?.departure?.message}
                defaultValue={data.schedule.departure}
              />
              <Input
                autocomplete="off"
                className="col-span-3"
                type="datetime-local"
                label="Fecha y hora de termino"
                radius="sm"
                labelPlacement="outside"
                placeholder="hour"
                {...register("schedule.return")}
                isInvalid={Boolean(errors.schedule?.return)}
                errorMessage={errors.schedule?.return?.message}
                defaultValue={data.schedule.return}
              />
              <Textarea
                autocomplete="off"
                className="col-span-full"
                type="text"
                label="Descripción"
                placeholder="Deescriba el tour"
                radius="sm"
                labelPlacement="outside"
                {...register("description")}
                isInvalid={Boolean(errors.description)}
                errorMessage={errors.description?.message}
                defaultValue={data.description}
              />
              <Input
                autocomplete="off"
                className="col-span-3"
                type="text"
                label="Lugar de encuentro"
                radius="sm"
                labelPlacement="outside"
                placeholder="Sambil"
                {...register("departureLocation")}
                isInvalid={Boolean(errors.departureLocation)}
                errorMessage={errors.departureLocation?.message}
                defaultValue={data.departureLocation}
              />
              <Input
                autocomplete="off"
                className="col-span-3"
                type="datetime-local"
                label="Fecha y hora del encuentro"
                radius="sm"
                labelPlacement="outside"
                placeholder="hour"
                {...register("schedule.meeting")}
                isInvalid={Boolean(errors.schedule?.meeting)}
                errorMessage={errors.schedule?.meeting?.message}
                defaultValue={data.schedule.meeting}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" radius="sm" type="submit">
                Editar Tour
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
