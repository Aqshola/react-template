import { createRouter } from "@tanstack/react-router";
import rootRoute from "./root";
import landingRootRoute from "./landing";
import firstRootRoute from "./first";
import secondRootRoute from "./second";
import type { ROUTE_CONTEXT } from "./type";

const routeTree=rootRoute.addChildren([
    landingRootRoute,
    firstRootRoute,
    secondRootRoute,
])


const initialContext:ROUTE_CONTEXT={
    example: {
        exampleValue: ''
    }
}
const router=createRouter({routeTree,context: initialContext})

export default router