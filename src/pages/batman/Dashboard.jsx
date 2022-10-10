import { useState } from "react"
import BrokeTextEditor from "../../components/broketexteditor/BrokeTextEditor"
import TextEditor from "../../components/broketexteditor/TextEditor"
import AssetsGalary from "../../components/dashboard/AssetsGalary"
import DashboardNavigation from "../../components/dashboard/DashboardNavigation"
import PostEditor from "./posteditor/PostEditor"

const Dashboard = (props) => {
    const [nav, setNav] = useState(0)

    const selectComponent = () => {
        switch(nav) {
            case 0: return <TextEditor />
            case 1: return <PostEditor></PostEditor>
            case 2: return <AssetsGalary/>
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