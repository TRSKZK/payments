"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Form } from "react-hook-form";
import { useCreateNewAddress } from "@/components/add-new-address/new-address-form-hook";

interface AddNewAddressProps {
  slug: string;
}

export default function AddNewAddress({ slug }: AddNewAddressProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { action, control, errors, register, reset } =
    useCreateNewAddress(slug);

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
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    reset();
                    onClose();
                  }}
                >
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
