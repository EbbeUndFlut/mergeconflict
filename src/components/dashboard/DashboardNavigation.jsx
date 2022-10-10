const DashboardNavigation = (props) => {
    return (
        <nav className="h-screen bg-secondpurple basis-1/12">
            <p className="text-white cursor-pointer" onClick={() => props.setSelection(0)}>Dashboard</p>
            <p className="text-white cursor-pointer" onClick={() => props.setSelection(1)}>New Post</p>
            <p className="text-white cursor-pointer" onClick={() => props.setSelection(2)}>Assets</p>
        </nav>
    )
}

export default DashboardNavigation