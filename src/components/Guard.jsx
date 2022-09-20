import { Outlet } from "react-router-dom"

const Guard = (props) => {
    return (
        <>
        <div>Hallo</div>
        <Outlet></Outlet>
        </>
    )
}

export default Guard