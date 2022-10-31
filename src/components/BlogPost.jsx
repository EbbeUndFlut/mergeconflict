const BlogPost = ({ post }) => {
    return (
        <div className="flex flex-col px-5 py-2 bg-mainpurple">
            <h1 className="text-white text-5xl uppercase self-center my-5 ">{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.data }} />
        </div>

    )
}

export default BlogPost