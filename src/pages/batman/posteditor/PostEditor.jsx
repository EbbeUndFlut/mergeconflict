import { useState } from "react"
const PostEditor = (props) => {
    const [imgUrl, setImgUrl] = useState(null)
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const publish = () => {
        //fetch post create new Post
    }
    return (
        <section className="px-20 flex flex-col">
            { imgUrl && 
            <img src={imgUrl}/>
            }
            <input className="py-2 px-3 text-2xl focus:outline-none bg-purple-100" type="text" name="" id="" onChange={(e)=>setTitle(e.target.value)} />
            <textarea name="" id="" cols="30" rows="10" onChange={(e) => setContent(e.target.value)}></textarea>
            <button onClick={publish}>Publish</button>
            {content}
        </section>
    )
}

export default PostEditor