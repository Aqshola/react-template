import { Outlet, useLocation } from "@tanstack/react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { useEffect } from "react";
import { animate} from 'animejs';

export default function AppLayout() {
    const location = useLocation()
 
    
    if (location.pathname === "/") {
        return <PublicLayout/>
    }

    return <PrivateLayout/>
   
}


function PrivateLayout(){
   useEffect(() => {
        animate('#sidebar-component', {
            translateX: [{
                from: "-100%",
                to: "0",
                ease: "inOut(3)",
                duration: 500
            }],
        })
        animate('#header-component', {
            translateY: [{
                from: "-100%",
                to: "0",
                ease: "inOut(3)",
                duration: 500
            }],
        })
        animate('#content-component', {
            translateX: [{
                from: "-100%",
                to: "0",
                ease: "inOut(3)",
                duration: 500
            }],
        })
    }, [])

     return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header id="header-component" className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0 z-10" id="content-component">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>


    )
}

function PublicLayout(){
    return <Outlet />
}