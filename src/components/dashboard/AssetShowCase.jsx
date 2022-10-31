import { useEffect } from "react"
import { useState } from "react"
import Assets from "./Assets"

const AssetShowCase = (props) => {
    const [assets, setAssets] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/assets')
            .then(res => res.json())
            .then(data => setAssets(data))
    }, [])
    return (
        <div className="flex flex-row flex-wrap gap-2">
            {assets.length === 0 &&
                <div className="animate-bounce">Loading...</div>
            }
            {assets.map((item, key) => <Assets item={item} key={key} />)}
        </div>
    )
}

export default AssetShowCase