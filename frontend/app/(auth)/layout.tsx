import LoginHeader from "@/components/LoginHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "fullstack repair website that take notes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
    <LoginHeader />
        {children}
    </>
  );
}
