import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import React from "react";
import { deleteAddress } from "@/app/actions/delete-address";
import { customMotion } from "@/common/custom-motion";

interface DeleteModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
  addressId: string;
  slug: string;
}

export function DeleteModal({
  isOpen,
  onOpenChange,
  addressId,
  slug,
}: DeleteModalProps) {
  const action = deleteAddress.bind(null, { addressId, slug });
  return (
    <Modal
      backdrop="blur"
      aria-hidden={false}
      aria-modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      motionProps={customMotion}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Delete Address
            </ModalHeader>
            <ModalBody>
              <p>
                Do you want to delete this address and all utility services
                associated with it?
              </p>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" variant="light" onPress={onClose}>
                Cancel
              </Button>
              <form action={action}>
                <Button type="submit" color="danger" onPress={onClose}>
                  Delete
                </Button>
              </form>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
