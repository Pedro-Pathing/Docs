import type { ReactNode } from "react";

export default function Row({ children }: { children: ReactNode }) {
  return (
    <div className="xl:flex xl:m-8 xl:gap-8 xl:row">
      {children}
    </div>
  );
}
