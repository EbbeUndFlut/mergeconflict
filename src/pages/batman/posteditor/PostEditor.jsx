import { useState } from "react"
const PostEditor = (props) => {
    const [imgUrl, setImgUrl] = useState()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState([])

    const publish = () => {
        const formData = new FormData()
        formData.append("title", title)
        formData.append("content", content)
        formData.append("category", category)
        formData.append("avatar", imgUrl)
        fetch('http://localhost:9898/api/posts',{
            method: 'POST',
            credentials:'include',
            body: formData
        })
        .then(data => data.json())
        .then(data=>console.log(data))
    }
    return (
        <section className="px-20 flex flex-col basis-full">
            {/* { imgUrl && 
            <img src={imgUrl}/>
            } */}
            <input type="file" onChange={(e)=>setImgUrl(e.target.files[0])}></input>
            <input className="py-2 px-3 text-2xl my-5 focus:outline-none bg-purple-100" type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)} />
            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setContent(e.target.value)}></textarea>
            <input className=" px-3 text-xl my-5 focus:outline-none bg-white" type="text" name="" id="" onChange={e=>setCategory(e.target.value)}/>
            <button onClick={publish}>Publish</button>
            {content}
        </section>
    )
}

export default PostEditor