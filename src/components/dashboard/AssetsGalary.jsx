import AssetsAdd from "./AssetsAdd"
import AssetShowCase from "./AssetShowCase"

const AssetsGalary = () => {
    return (
        <section className="p-8 basis-full">
            <h1>Assets</h1>
            <AssetsAdd />
            <AssetShowCase />
        </section>

    )
}

export default AssetsGalary