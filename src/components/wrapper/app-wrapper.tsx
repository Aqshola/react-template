import { RouterProvider } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider,  } from "@tanstack/react-query"
import router from "@/routes/route";
import useExampleStore from "@/store/example";
import type { EXAMPLE_STORE_CONTEXT } from "@/routes/type";



export default function AppWrapper(){
    const exampelStore=useExampleStore((state=>state))

    const exampleContext:EXAMPLE_STORE_CONTEXT={
        exampleValue: exampelStore.exampleValue
    }
    const queryClient=new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} context={{
                example: exampleContext
            }}/>
        </QueryClientProvider>
    )
}