"use client";

import {
  Pagination,
  SortDescriptor,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import useSWR from "swr";
import { useMemo, useState } from "react";
import { ResponseWithCount } from "@/app/api/get-payments/[...page]/route";
import { Payment } from "@prisma/client";
import { useRenderCell } from "@/app/user/payments/render-cells";

interface PaymentTableProps {
  userId: string | null;
}

const fetcher = (url: string) => fetch(url).then((res: Response) => res.json());

export function PaymentTable({ userId }: PaymentTableProps) {
  const [page, setPage] = useState(1);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "paymentDateTime",
    direction: "ascending",
  });

  const renderCell = useRenderCell();

  const { data, isLoading } = useSWR<ResponseWithCount>(
    `/api/get-payments/${page}/${userId}}`,
    fetcher,
    {
      keepPreviousData: true,
    },
  );

  const rowsPerPage = 10;

  const pages = useMemo(() => {
    return data?.count ? Math.ceil(data.count / rowsPerPage) : 0;
  }, [data?.count, rowsPerPage]);

  const loadingState =
    isLoading || data?.results.length === 0 ? "loading" : "idle";

  const sortedItems = useMemo(() => {
    return (
      data?.results &&
      [...data.results].sort((a: Payment, b: Payment) => {
        const first = a[sortDescriptor.column as keyof Payment] as number;
        const second = b[sortDescriptor.column as keyof Payment] as number;
        const cmp = first < second ? -1 : first > second ? 1 : 0;

        return sortDescriptor.direction === "descending" ? -cmp : cmp;
      })
    );
  }, [sortDescriptor, data?.results]);

  return (
    <Table
      sortDescriptor={sortDescriptor}
      onSortChange={setSortDescriptor}
      aria-label="Example table with client async pagination"
      bottomContent={
        pages > 0 ? (
          <div className="flex w-full justify-center">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
          </div>
        ) : null
      }
    >
      <TableHeader>
        <TableColumn className="text-header-logo font-bold" key="address">
          Address
        </TableColumn>
        <TableColumn className="text-header-logo font-bold" key="serviceName">
          Service Name
        </TableColumn>
        <TableColumn
          className="text-header-logo font-bold"
          key="paymentDateTime"
          allowsSorting
        >
          Payment Date Time
        </TableColumn>
        <TableColumn
          className="text-header-logo font-bold"
          key="personalAccountNumber"
        >
          Personal Account Number
        </TableColumn>
        <TableColumn className="text-header-logo font-bold" key="actions">
          actions
        </TableColumn>
      </TableHeader>
      <TableBody
        items={sortedItems ?? []}
        loadingContent={<Spinner />}
        loadingState={loadingState}
      >
        {(item) => (
          <TableRow key={item?.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey as never)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
