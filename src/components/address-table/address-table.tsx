"use client";
import React, { useState } from "react";
import { Address } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  useDisclosure,
} from "@nextui-org/react";
import { DeleteModal } from "@/components/delete-modal/delete-modal";
import { useRenderCell } from "@/components/address-table/render-cell";

interface AddressTableProps {
  addresses: Address[];
  slug: string;
}

const columns = [
  { name: "City", uid: "city" },
  { name: "Street", uid: "street" },
  { name: "Apartment", uid: "apartment" },
  { name: "Actions", uid: "actions" },
];

export function AddressTable({ addresses, slug }: AddressTableProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [addressId, setAddressId] = useState("");

  const renderCell = useRenderCell(onOpen, setAddressId);

  return (
    <>
      <DeleteModal
        slug={slug}
        addressId={addressId}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
      <Table aria-label="Table for a addresses">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className="text-header-logo font-bold"
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={addresses}>
          {(address) => (
            <TableRow key={address.id}>
              {(columnKey) => (
                // @ts-expect-error/comes from columnKey type
                <TableCell>{renderCell(address, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
