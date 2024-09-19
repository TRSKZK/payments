"use client";
import { useCallback } from "react";
import { Address } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { EditIcon } from "@/components/address-table/edit-icon";
import { EyeIcon } from "@/components/address-table/eye-icon";
import { DeleteIcon } from "@/components/address-table/delete-icon";

interface AddressTableProps {
  addresses: Address[];
}

const columns = [
  { name: "City", uid: "city" },
  { name: "Street", uid: "street" },
  { name: "Apartment", uid: "apartment" },
  { name: "Actions", uid: "actions" },
];

export function AddressTable({ addresses }: AddressTableProps) {
  const renderCell = useCallback(
    (address: Address, columnKey: keyof Address & "actions") => {
      const cellValue = address[columnKey];

      switch (columnKey) {
        case "city":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "street":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "apartment":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex items-center justify-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit address">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete address">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );
  return (
    <Table aria-label="Example table with custom cells">
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
  );
}
