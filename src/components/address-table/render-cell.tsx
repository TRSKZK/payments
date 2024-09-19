import React, { useCallback } from "react";
import { Address } from "@prisma/client";
import { Tooltip } from "@nextui-org/react";
import { EyeIcon } from "@/components/address-table/eye-icon";
import { EditIcon } from "@/components/address-table/edit-icon";
import { DeleteIcon } from "@/components/address-table/delete-icon";

export function useRenderCell(
  onOpen: () => void,
  setAddressId: React.Dispatch<React.SetStateAction<string>>,
) {
  return useCallback(
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
                  <DeleteIcon
                    onClick={() => {
                      onOpen();
                      setAddressId(address.id);
                    }}
                  />
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
}
