import * as React from "react"
import {
  BookOpen,
  Bot,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { DashboardLogo } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { LIST_NAVIGATION } from "@/constants/ui"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const userData = {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  }
  return (
    <Sidebar collapsible="icon"  {...props} id="sidebar-component" className="z-50 [view-transition-name:sidebar-content]">
      <SidebarHeader>
        <DashboardLogo />
      </SidebarHeader>
      <SidebarContent className="z-50">
        <NavMain items={LIST_NAVIGATION} />
      </SidebarContent>
      <SidebarFooter className="z-50">
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
