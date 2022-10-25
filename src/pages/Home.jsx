import { useState } from "react"
import BlogPost from "../components/BlogPost"
import LatestBlogPosts from "../components/LatestBlogPosts"
import MainSearchBar from "../components/MainSearchbar"
import LineBackground from "../components/threejs/LineBackground"
import HeroSection from "../HeroSection"

const Home = () => {
    const [post, setPost] = useState(null)
    const showPost = () => post ? <BlogPost post={post} /> : <LineBackground />
    return (
        <>
            <HeroSection></HeroSection>
            <MainSearchBar setpost={setPost}></MainSearchBar>
            {/* <LatestBlogPosts></LatestBlogPosts> */}
            {showPost()}
        </>
    )
}

export default Home