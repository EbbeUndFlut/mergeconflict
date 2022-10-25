import { useEffect } from "react"
import { useState } from "react"
import Assets from "./Assets"

const AssetShowCase = (props) => {
    const [assets, setAssets] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/api/assets')
            .then(res => res.json())
            .then(data => setAssets(data))
    }, [])
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {assets.map((item, key) => <Assets item={item} key={key} />)}
        </div>
    )
}

export default AssetShowCase