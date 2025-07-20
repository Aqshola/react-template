import { Helmet } from "react-helmet";

export default function TestSecond() {
    return (
        <>
            <Helmet>
                <title>Second Page</title>
            </Helmet>
            <div className="[view-transition-name:main-content]">
                This is Second Test Page
            </div>
        </>

    )
}