import { NavbarItem, Skeleton } from "@nextui-org/react";

export const userSkeleton = () => (
  <NavbarItem className="max-w-[200px] w-full flex items-center gap-3">
    <div>
      <Skeleton className="flex rounded-full w-10 h-10" />
    </div>
    <div className="w-full flex flex-col gap-2">
      <Skeleton className="h-2 w-3/5 rounded-lg" />
      <Skeleton className="h-2 w-4/5 rounded-lg" />
    </div>
  </NavbarItem>
);
