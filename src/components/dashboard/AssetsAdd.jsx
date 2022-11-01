const { useEffect } = require("react")
const { useState } = require("react")

const AssetsAdd = () => {
    const [file, setFile] = useState(null)
    const [src, setSrc] = useState(null)
    const [base64, setBase64] = useState('')

    useEffect(() => {
        if (file) {
            setSrc(URL.createObjectURL(file))
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)


        }

    }, [file])

    const handleReaderLoaded = (event) => {
        setBase64(event.target.result)
    }

    const upload = () => {
        console.log(base64);
        const asset = {
            name: file.name,
            file: base64
        }
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/assets', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(asset)
        })
    }
    return (
        <div>
            {src &&
                <img src={src} alt="" />
            }
            <input className="hidden" type="file" name="" id="asset" onChange={(e) => setFile(e.target.files[0])} />
            <label className="border-1 border-red-500 rounded-xl" htmlFor="asset">ADD</label>
            <button disabled={!file} onClick={upload}>upload</button>

        </div>
    )
}

export default AssetsAdd   