import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { date, number, object, string } from "yup";
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
} from "@nextui-org/react";

const schema = object().shape({
  name: string().required("Name is required"),
  capacity: number()
    .min(5, "Minimo 5 personas")
    .required("Capacity is required"),
  destination: string().required("Destination is required"),
  price: number().min(10, "Precio minimo 10")
  .required("Price is required"),
  meetingPoint: string().required("Coloque el lugar de encuentro"),
  // Add more validations as needed
});

export default function AddTourModal({ isOpen, onOpen, onOpenChange }) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  console.log(errors);
  const onSubmit = (data) => {
    console.log(data);
    reset();
    // Perform necessary actions with the form data here
    onOpenChange(false); // Close the modal
  };

  return (
    <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader className="flex flex-col gap-1">
              Crear tour
              <Divider />
            </ModalHeader>
            <ModalBody className="grid grid-cols-4 gap-4">
              <Input
                autocomplete="off"
                className="col-span-3"
                type="text"
                label="Name"
                radius="sm"
                labelPlacement="outside"
                placeholder="Tour name"
                {...register("name")}
                isInvalid={Boolean(errors.name)}
                errorMessage={errors.name?.message}
              />
              <Input
                autocomplete="off"
                type="number"
                label="Capacity"
                radius="sm"
                labelPlacement="outside"
                placeholder="Quantity"
                {...register("capacity")}
                isInvalid={Boolean(errors.capacity)}
                errorMessage={errors.capacity?.message}
                defaultValue={0}
              />
              <Input
                autocomplete="off"
                className="col-span-3"
                type="text"
                label="Destination"
                radius="sm"
                labelPlacement="outside"
                placeholder="Main destination of the tour"
                {...register("destination")}
                isInvalid={Boolean(errors.destination)}
                errorMessage={errors.destination?.message}
              />
              <Input
                autocomplete="off"
                type="number"
                label="Price"
                radius="sm"
                labelPlacement="outside"
                placeholder="Amount"
                {...register("price")}
                isInvalid={Boolean(errors.price)}
                errorMessage={errors.price?.message}
                defaultValue={0}
              />
                <Input
                autocomplete="off"
                className="col-span-2"
                type="datetime-local"
                label="Fecha y hora de inicio"
                radius="sm"
                labelPlacement="outside"
                placeholder="hour"
                {...register("meetingDateTime")}
                isInvalid={Boolean(errors.meetingDateTime)}
                errorMessage={errors.meetingDateTime?.message}
              />
                <Input
                autocomplete="off"
                className="col-span-2"
                type="datetime-local"
                label="Fecha y hora de termino"
                radius="sm"
                labelPlacement="outside"
                placeholder="hour"
                {...register("meetingDateTime")}
                isInvalid={Boolean(errors.meetingDateTime)}
                errorMessage={errors.meetingDateTime?.message}
              />
              <Textarea
                autocomplete="off"
                className="col-span-full"
                type="text"
                label="Description"
                placeholder="Enter the tour description"
                radius="sm"
                labelPlacement="outside"
                {...register("description")}
                isInvalid={Boolean(errors.description)}
                errorMessage={errors.description?.message}
              />
              <Input
                autocomplete="off"
                className="col-span-2"
                type="text"
                label="Meeting Point"
                radius="sm"
                labelPlacement="outside"
                placeholder="Specify where they will meet"
                {...register("meetingPoint")}
                isInvalid={Boolean(errors.meetingPoint)}
                errorMessage={errors.meetingPoint?.message}
              />
              <Input
                autocomplete="off"
                className="col-span-2"
                type="datetime-local"
                label="Meeting Date and Time"
                radius="sm"
                labelPlacement="outside"
                placeholder="hour"
                {...register("meetingDateTime")}
                isInvalid={Boolean(errors.meetingDateTime)}
                errorMessage={errors.meetingDateTime?.message}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <Button color="primary" radius="sm" type="submit">
                Create Tour
              </Button>
            </ModalFooter>
          </form>
        )}
      </ModalContent>
    </Modal>
  );
}
