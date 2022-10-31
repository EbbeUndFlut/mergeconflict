import { useEffect } from "react"
import { useState } from "react"
import PostItem from "./PostItem"

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [state, setState] = useState(false)

    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/posts', {
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => setPosts(data))
    }, [state])


    return (
        <div className=" basis-full">
            {posts.map((post, key) => <PostItem post={post} changestate={setState} />)}
        </div>
    )
}

export default PostList