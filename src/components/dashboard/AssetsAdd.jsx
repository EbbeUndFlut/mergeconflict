const { useEffect } = require("react")
const { useState } = require("react")

const AssetsAdd = () => {
    const [file, setFile] = useState(null)
    const [src, setSrc] = useState(null)

    useEffect(()=>{
        if(file)
            setSrc(URL.createObjectURL(file))
    },[file])

    const upload = () =>{
        const form = new FormData()
        form.append('picture', file)
        fetch('http://localhost/api/assets', {
            method: 'POST',
            credentials:'include',
            body:form
        })
    }
    return (
        <div>
            {src &&
            <img src={src} />
            }
            <input className="hidden" type="file" name="" id="asset" onChange={(e) => setFile(e.target.files[0])} />
            <label className="border-1 border-red-500 rounded-xl" htmlFor="asset">ADD</label>
            <button disabled={!file} onClick={upload}>upload</button>

        </div>
    )
 }

 export default AssetsAdd   