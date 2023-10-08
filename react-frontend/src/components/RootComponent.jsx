import { Outlet } from "react-router-dom";

const RootComponent = () => {
    return (
        <>
            <main>
                <div className="App">
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default RootComponent;