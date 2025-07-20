import { createRoute } from "@tanstack/react-router";
import rootRoute from "./root";
import React from "react";

const Test = React.lazy(() => import("@/pages/first/test"));

const firstRootRoute=createRoute({
    getParentRoute:()=>rootRoute,
    path:"/first"
})


const firstRoute=createRoute({
    getParentRoute:()=>firstRootRoute,
    path:"/",
    component:Test
})

firstRootRoute.addChildren([firstRoute]);


export default firstRootRoute;
