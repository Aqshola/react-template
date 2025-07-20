import { createRoute } from "@tanstack/react-router";
import rootRoute from "./root";
import React from "react";

const Landing = React.lazy(() => import("@/pages/landing/landing"));

const landingRootRoute=createRoute({
    getParentRoute:()=>rootRoute,
    path:"/",
    component:Landing
})


export default landingRootRoute;

