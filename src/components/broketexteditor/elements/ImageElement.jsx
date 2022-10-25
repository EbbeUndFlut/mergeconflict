import { useState } from "react"
import AssetModal from "./AssetModal"

const ImageElement = (props) => {
    const [src, setSrc] = useState('/img/placeholder.jpeg')
    const [modal, setModal] = useState(false)
    return (
        <>
            <img onClick={() => setModal(prev => !prev)} src={src} alt="" />
            {modal &&
                <AssetModal setsrc={setSrc} />}
        </>
    )
}
export default ImageElement