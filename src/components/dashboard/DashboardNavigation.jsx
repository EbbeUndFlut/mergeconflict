const DashboardNavigation = (props) => {
    return (
        <nav className="h-screen bg-secondpurple basis-1/12">
            <p className="text-white" onClick={() => props.setSelection(0)}>Dashboard</p>
            <p className="text-white" onClick={() => props.setSelection(1)}>New Post</p>
        </nav>
    )
}

export default DashboardNavigation