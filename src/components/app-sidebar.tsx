import * as React from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { MoreHorizontal } from "lucide-react";
import { SearchForm } from "@/components/search-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarMenuAction,
} from "@/components/ui/sidebar";

// This is sample data.
const data = ["Projects", "Teams", "Settings"];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h4 className="p-4 scroll-m-20 text-xl font-nanum-extrabold font-semibold tracking-tight">
          Projects
        </h4>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.map((project, index) => (
                <SidebarMenuItem key={`${project}-${index}`}>
                  <SidebarMenuButton asChild>
                    <Link href={`/${project}`}>
                      <span>{project}</span>
                    </Link>
                  </SidebarMenuButton>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <SidebarMenuAction>
                        <MoreHorizontal />
                      </SidebarMenuAction>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent side="right" align="start">
                      <DropdownMenuItem>
                        <Trash2 />
                        <span>삭제하기</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
