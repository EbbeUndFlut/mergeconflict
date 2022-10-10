import LatestBlogPosts from "../components/LatestBlogPosts"
import MainSearchBar from "../components/MainSearchbar"
import LineBackground from "../components/threejs/LineBackground"
import HeroSection from "../HeroSection"

const Home = () => {
    return (
        <>
        <HeroSection></HeroSection>
        <MainSearchBar></MainSearchBar>
        {/* <LatestBlogPosts></LatestBlogPosts> */}
        <LineBackground></LineBackground>
        </>
    )
}

export default Home