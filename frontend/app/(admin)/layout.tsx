import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "fullstack repair website that take notes",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
        {children}
    </>
  );
}
