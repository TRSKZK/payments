import React, { useCallback } from "react";
import { Payment } from "@prisma/client";
import { Tooltip } from "@nextui-org/react";
import { EditIcon } from "@/components/address-table/edit-icon";
import { DeleteIcon } from "@/components/address-table/delete-icon";

function transformDateTimeForUser(date: string) {
  return new Date(date).toLocaleDateString("en-UK", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function useRenderCell() {
  return useCallback(
    (payment: Payment, columnKey: keyof Payment & "actions") => {
      const cellValue = payment[columnKey];

      switch (columnKey) {
        case "address":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "serviceName":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
            </div>
          );
        case "paymentDateTime":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">
                {transformDateTimeForUser(cellValue)}
              </p>
            </div>
          );
        case "actions":
          return (
            <div className="relative flex items-center justify-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  +
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
}
