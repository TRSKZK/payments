"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import { Form, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface NewAddressForm {
  city: string;
  street: string;
  building: string;
  apartment: string;
}

const defaultValues = {
  city: "",
  street: "",
  building: "",
  apartment: "",
};

const newAddressFormSchema = z.object({
  city: z
    .string()
    .min(3)
    .regex(/^[A-Za-z]+$/, "Alphabetical symbols only"),
  street: z
    .string()
    .min(3)
    .regex(/^[a-zA-Z ]*$/, "Alphabetical symbols only"),
  building: z.string().min(1, "Should be at least one character long"),
  apartment: z.string().min(1, "Should be at least one character long"),
});

export default function AddNewAddress() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<NewAddressForm>({
    defaultValues,
    resolver: zodResolver(newAddressFormSchema),
  });

  const action: () => void = handleSubmit(async (data: NewAddressForm) => {
    reset();
  });

  return (
    <>
      <Button color="secondary" onPress={onOpen}>
        Add new Address
      </Button>
      <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new address
              </ModalHeader>
              <ModalBody>
                <Form control={control}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        {...register("city")}
                        type="text"
                        label="City"
                        id="city"
                        errorMessage={errors.city?.message}
                        isInvalid={!!errors.city}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        {...register("street")}
                        type="text"
                        label="Street"
                        id="street"
                        errorMessage={errors.street?.message}
                        isInvalid={!!errors.street}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        {...register("building")}
                        type="text"
                        label="Building"
                        id="building"
                        errorMessage={errors.building?.message}
                        isInvalid={!!errors.building}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        {...register("apartment")}
                        type="text"
                        label="Apartment"
                        id="apartment"
                        errorMessage={errors.apartment?.message}
                        isInvalid={!!errors.apartment}
                        required
                      />
                    </div>
                  </div>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  type="submit"
                  color="secondary"
                  onPress={() => {
                    action();
                    onClose();
                  }}
                >
                  Add
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
