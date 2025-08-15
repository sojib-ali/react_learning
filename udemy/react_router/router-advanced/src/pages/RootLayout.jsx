import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

function RootLayOut(){
    return (
        <>
        <MainNavigation />
        <main>
            <Outlet />
        </main>
        </>
    )
}

export default RootLayOut;