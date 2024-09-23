"use client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
} from "@nextui-org/react";
import { Form } from "react-hook-form";
import { customMotion } from "@/common/custom-motion";
import { useCreateNewUtility } from "@/app/user/profile/[slug]/[addressId]/use-create-new-utility";

interface AddUtilityFormProps {
  addressId: string;
  slug: string;
}

export function AddUtilityForm({ addressId, slug }: AddUtilityFormProps) {
  const {
    isOpen,
    onOpen,
    onOpenChange,
    control,
    register,
    errors,
    reset,
    action,
    isValid,
  } = useCreateNewUtility(addressId, slug);

  return (
    <>
      <Tooltip content="Add new utility service">
        <Button
          onPress={onOpen}
          isIconOnly
          className="font-bold text-header-logo"
          variant="ghost"
          color="secondary"
        >
          +
        </Button>
      </Tooltip>
      <Modal
        size="5xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        motionProps={customMotion}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Form control={control}>
                  <div className="grid grid-cols-2 gap-8">
                    <Input
                      label="name"
                      {...register("name")}
                      variant="bordered"
                      isInvalid={!!errors?.name?.message}
                      errorMessage={errors.name?.message}
                    />
                    <Input
                      label="Iban"
                      {...register("iban")}
                      variant="bordered"
                      isInvalid={!!errors?.iban?.message}
                      errorMessage={errors.iban?.message}
                    />
                    <Input
                      label="EDRPOU"
                      {...register("edrpou")}
                      type="text"
                      variant="bordered"
                      isInvalid={!!errors?.edrpou?.message}
                      errorMessage={errors.edrpou?.message}
                    />
                    <Input
                      label="Personal Account Number"
                      {...register("personalAccountNumber")}
                      type="text"
                      variant="bordered"
                      isInvalid={!!errors?.personalAccountNumber?.message}
                      errorMessage={errors.personalAccountNumber?.message}
                    />
                  </div>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => reset}
                  color="danger"
                  variant="flat"
                  onPress={onClose}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  onPress={() => {
                    action();
                    if (isValid) {
                      onClose();
                    }
                  }}
                >
                  Create
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
