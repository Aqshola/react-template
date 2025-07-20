import { createRoute } from "@tanstack/react-router";
import rootRoute from "./root";
import React from "react";

const TestSecond = React.lazy(() => import("@/pages/second/test-second"));

const secondRootRoute=createRoute({
    getParentRoute:()=>rootRoute,
    path:"/second"
})


const secondRoute=createRoute({
    getParentRoute:()=>secondRootRoute,
    path:"/",
    component:TestSecond
})

secondRootRoute.addChildren([secondRoute]);
export default secondRootRoute;
