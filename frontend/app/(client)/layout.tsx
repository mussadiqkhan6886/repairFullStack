import ClientHeader from "@/components/ClientHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Full Stack Repair Notes App",
  description: "fullstack repair website that take notes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
    <ClientHeader />
        {children}
    </>
  );
}
