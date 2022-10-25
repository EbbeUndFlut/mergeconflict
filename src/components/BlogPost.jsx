const BlogPost = ({ post }) => {
    return (
        <>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.data }} />
        </>

    )
}

export default BlogPost