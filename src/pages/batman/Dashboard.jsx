import { useState } from "react"
import DashboardNavigation from "../../components/dashboard/DashboardNavigation"
import PostEditor from "./posteditor/PostEditor"

const Dashboard = (props) => {
    const [nav, setNav] = useState(0)

    const selectComponent = () => {
        switch(nav) {
            case 0: return <h1>Hallo</h1>
                    break;
            case 1: return <PostEditor></PostEditor>
        }
    }
    return (
        <main className="bg-mainpurple min-h-screen flex flex-row">
            <DashboardNavigation setSelection={setNav}></DashboardNavigation>
            { selectComponent()}
        </main>
    )
}

export default Dashboard