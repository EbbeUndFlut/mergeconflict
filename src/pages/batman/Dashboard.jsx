import { useState } from "react"
import TextEditor from "../../components/broketexteditor/TextEditor"
import AssetsGalary from "../../components/dashboard/AssetsGalary"
import Category from "../../components/dashboard/category/Category"
import DashboardNavigation from "../../components/dashboard/DashboardNavigation"
import Overview from "../../components/dashboard/Overview"
import PostList from "../../components/dashboard/posts/PostList"


const Dashboard = (props) => {
    const [nav, setNav] = useState(0)

    const selectComponent = () => {
        switch (nav) {
            case 0: return <Overview />
            case 1: return <TextEditor />
            case 2: return <AssetsGalary />
            case 3: return <Category />
            case 4: return <PostList />
            default: return <Overview />
        }
    }
    return (
        <main className="bg-mainpurple min-h-screen flex flex-row justify-between">
            <DashboardNavigation setSelection={setNav}></DashboardNavigation>
            {selectComponent()}
        </main>
    )
}

export default Dashboard