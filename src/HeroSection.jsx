import HeroButton from "./components/HeroButton"

const HeroSection = (props) => {
    return (
        <section className="h-screen bg-mainpurple flex flex-row pt-80 px-10">
            <div className="basis-1/2">
                <h1 className="font-sans font-light text-white text-8xl">Lerne Git</h1>
                <p className="font-sans  text-8xl text-secondpurple">wir helfen Dir</p>
                <p className="mt-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis neque aspernatur temporibus maxime, culpa similique distinctio nulla? Possimus accusamus voluptatibus quis nesciunt eveniet sit non vitae rem maxime labore, dolorem dolores aperiam, alias eius mollitia ut architecto dolore maiores laudantium inventore soluta enim atque voluptas! Eos quod laboriosam aperiam? Assumenda.</p>
                <HeroButton text="Lerne jetzt Git"></HeroButton>
            </div>
            <div></div>
        </section>
    )
}
export default HeroSection