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
  useDisclosure,
} from "@nextui-org/react";
import { Form, useForm } from "react-hook-form";
import { customMotion } from "@/common/custom-motion";

export function AddUtilityForm() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { control } = useForm();
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
                    <Input label="Email" variant="bordered" />
                    <Input
                      label="Password"
                      type="password"
                      variant="bordered"
                    />
                  </div>
                </Form>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancel
                </Button>
                <Button type="submit" color="primary" onPress={onClose}>
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
