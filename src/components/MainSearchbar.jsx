import { useState } from "react";

const MainSearchBar = (props) => {

    const [item, setItem] = useState('')

    const search = async (event) => {
        if (event.key === 'Enter') {
            const result = await fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/search?q=' + item)
            const data = await result.json()
            props.setpost(data)
            console.log(data);
        }
    }
    return (
        <section className="bg-secondpurple flex flex-col py-8 px-10 items-center">
            <p className="text-white text-4xl pt-5">Welchen Git <span className="text-mainpurple">Befehl</span> suchst Du?</p>
            <input className="text-2xl my-8 w-1/2 font-mono py-2 px-3 outline-none" type="text" onKeyDown={search} onChange={(e) => setItem(e.target.value)}></input>
        </section>
    )
}

export default MainSearchBar