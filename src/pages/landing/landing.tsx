import { Link } from "@tanstack/react-router"

export default function Landing() {
    return (
        <div className="h-screen max-w-7xl mx-auto flex flex-col items-center">
            <h1 className="mt-48 text-4xl">
                This is Landing Page
            </h1>

            <button className="mt-5 border p-3">

                <Link to={"/first"} >

                    Enter Web

                </Link>
            </button>
        </div>
    )
}