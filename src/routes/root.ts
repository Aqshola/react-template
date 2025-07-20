import AppLayout from '@/components/wrapper/app-layout'
import { createRootRouteWithContext } from '@tanstack/react-router'
import type { ROUTE_CONTEXT } from './type'



const rootRoute=createRootRouteWithContext<ROUTE_CONTEXT>()({
    component:AppLayout
})
export default rootRoute