const Login = (props) => {
    return (
        <main className="bg-mainpurple flex h-screen justify-center">
            <section className="bg-white self-center w-1/4 p-5 flex  flex-col">
                <label className="" htmlFor="">Anmeldename</label>
                <input className="outline outline-1 text-xl py-1" type="text" name="" id="" />
                <label className="mt-5">Passwort</label>
                <input className="outline outline-1 text-xl py-1" type="password" name="" id="" />
                <button className="bg-mainpurple mt-5 py-2 text-white">Anmelden</button>
            </section>
        </main>
    )
}

export default Login