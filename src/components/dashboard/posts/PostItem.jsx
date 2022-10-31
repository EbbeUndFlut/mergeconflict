const PostItem = (props) => {
    const remove = () => {
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/posts', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ id: props.post._id })
        })
            .then(response => props.changestate(prev => !prev))
    }

    return (
        <div className="flex flex-row border justify-around items-baseline my-5">
            <p className="text-xl">{props.post.title}</p>
            <button onClick={remove} className="bg-red-400 text-white text-lg px-2 py-1 my-1">DELETE</button>
        </div>
    )
}

export default PostItem