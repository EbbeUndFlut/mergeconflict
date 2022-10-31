import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = (props) => {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const navigate = useNavigate()

    const login = () => {
        console.log('in login');
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, pass: pass })
        }
        )
            .then(response => {
                if (response.status === 200) navigate('/batman/batcave')
                response.json()
            })
        // .then( data => console.log(data))
        // .catch(err => console.log(err))
    }
    return (
        <main className="bg-mainpurple flex h-screen justify-center">
            <section className="bg-white self-center w-1/4 p-5 flex  flex-col">
                <label className="" htmlFor="">Anmeldename</label>
                <input className="outline outline-1 text-xl py-1" type="text" onChange={(e) => setUsername(e.target.value)} />
                <label className="mt-5">Passwort</label>
                <input className="outline outline-1 text-xl py-1" type="password" onChange={e => setPass(e.target.value)} />
                <button className="bg-mainpurple mt-5 py-2 text-white" onClick={login}>Anmelden</button>
            </section>
        </main>
    )
}

export default Login