import { Helmet } from 'react-helmet'

export default function Test() {
    return (
        <>
            <Helmet>
                <title>First Page</title>
            </Helmet>
            <div className="[view-transition-name:main-content] z-0">
                This is First Test Page
            </div>
        </>
    )
}