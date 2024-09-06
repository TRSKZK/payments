import { ReactNode } from "react";

export default async function Container({ children }: { children: ReactNode }) {
  return (
    <div className="container mx-auto max-w-[1024px] px-6">{children}</div>
  );
}
