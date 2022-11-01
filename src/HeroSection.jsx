import HeroButton from "./components/HeroButton"

const HeroSection = (props) => {
    return (
        <section className="h-screen bg-mainpurple flex flex-row pt-80 px-10">
            <div className="basis-1/2">
                <h1 className="font-sans font-light text-white text-8xl">Lerne Git,</h1>
                <p className="font-sans  text-8xl text-secondpurple">wir helfen Dir!</p>
                <p className="mt-5">Ist git für dich ein Mysterium? Hättest du gerne einen Ort wo Du einfach mal schauen kannst was ein Befehl macht? Wir wollen Dir zeigen was so toll an git ist und warum wir es lieben. Nutze unsere Tutorials oder den schnellen Befehls-Finder. Mit uns wird git eine spassige Angelegenheit.</p>
                <HeroButton text="Lerne jetzt Git"></HeroButton>
            </div>
            <div></div>
        </section>
    )
}
export default HeroSection