"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="mr-2 h-4" />
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem className="hidden md:block">
            <BreadcrumbLink href="/">
              <h1
                className={`scroll-m-20 text-2xl font-semibold tracking-tight  ${
                  pathname === "/" ? "text-black" : ""
                }`}
              >
                Easy Cover
              </h1>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathname !== "/" && (
            <BreadcrumbSeparator className="hidden md:block" />
          )}
          <BreadcrumbItem>
            <BreadcrumbPage>
              <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                {pathname.split("/")}
              </h3>
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}
