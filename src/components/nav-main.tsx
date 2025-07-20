"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import type { SidebarNavigationItem } from "@/constants/ui"
import { DynamicIcon } from 'lucide-react/dynamic';
import { Link } from "@tanstack/react-router"

interface Props {
  items: SidebarNavigationItem[]
}
export function NavMain({
  items,
}: Props) {
  return (
    <SidebarGroup>

      <SidebarMenu>
        {items.map((item) => {
          if (item.subMenu.length == 0) {
            return <>
              <SidebarMenuItem>
                <SidebarMenuButton tooltip={item.label} asChild>
                  <Link viewTransition={{ types: ['slide-left'] }} to={item.url}>
                    {item.icon && < DynamicIcon name={item.icon} />}
                    <span>{item.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </>
          }
          return <>
            <Collapsible
              key={item.label}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.label}>
                    {item.icon && < DynamicIcon name={item.icon} />}
                    <span>{item.label}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.subMenu?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.label}>
                        <SidebarMenuSubButton asChild>
                          <Link to={subItem.url}>
                            <span>{subItem.label}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </>
        })}

      </SidebarMenu>
    </SidebarGroup>
  )
}
