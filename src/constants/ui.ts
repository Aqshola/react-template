import type { IconName } from "lucide-react/dynamic"

export type SidebarNavigationItem = {
    label: string
    url: string
    icon: IconName
    isActive: boolean
    subMenu: SidebarNavigationItem[]
}


export const LIST_NAVIGATION:SidebarNavigationItem[] = [
    {
        label: "Landing",
        url:"/",
        icon:"home",
        isActive:true,
        subMenu:[]
    },
    {
        label: "Test First",
        url:"/first",
        isActive:true,
        subMenu:[],
        icon:"test-tube"
    },
    {
        label: "Test Second",
        url:"/second",
        isActive:true,
        icon:"test-tube-diagonal",
        subMenu:[]
    }
]