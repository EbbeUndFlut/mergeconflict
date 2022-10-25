import { useState } from "react"
import { useEffect } from "react"
import ModalPreview from "./ModalPreview"

const AssetModal = (props) => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/assets')
            .then(result => result.json())
            .then(data => setData(data))
    }, [])
    return (
        <div className="flex flex-row flex-wrap">
            {data.map(item => <ModalPreview item={item} setimg={props.setsrc} />)}
        </div>
    )
}

export default AssetModal