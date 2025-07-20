import { LIST_NAVIGATION } from "@/constants/ui";
import { Link, Outlet, useLocation } from "@tanstack/react-router";

export default function AppLayout() {
    const location=useLocation()
    
    if(location.pathname === "/") {
        return <Outlet />
    }

    return (
        <div className="max-w-7xl mx-auto p-4 min-h-screen ">
            <nav>
                <h5>This is App Layout</h5>
            </nav>
            <div className="flex mt-2 h-full ">
                <div className="flex flex-col border min-h-[95vh] p-3">
                    {LIST_NAVIGATION.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className="p-2 hover:bg-gray-200">{item.label}</Link>
                    ))}
                </div>
                <div className="px-5">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}