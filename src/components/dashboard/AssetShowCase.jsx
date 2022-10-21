import { useEffect } from "react"
import { useState } from "react"

const AssetShowCase = (props) => {
    const [assets, setAssets] = useState([])

    useEffect(() => {
        fetch('http://localhost:9898/api/assets')
            .then(res => res.json())
            .then(data => setAssets(data))
    }, [])
    return (
        <div>
            {assets.map((item, key) => <img src={item.file} alt="" key={key} />)}
        </div>
    )
}

export default AssetShowCase