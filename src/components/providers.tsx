"use client";

import { type ReactNode } from "react";
import { Header } from "@/components/header";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
