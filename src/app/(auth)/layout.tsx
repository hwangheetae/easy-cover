import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-nanum antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
