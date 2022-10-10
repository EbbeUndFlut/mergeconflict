import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Home from "../pages/Home"

const Guard = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    
    useEffect(()=> {
        const getSome = async() => {
          const result = await fetch('http://localhost:9898/api/validate', {
            method: 'POST',
            credentials: 'include'
        })
        const data = await result.json()
        console.log('hier sind daten',data);
        setIsLoggedIn(data.state)
        }
        getSome()
    }, [])

    const check = () =>{
        if(isLoggedIn) return <Outlet></Outlet>
        navigate('/')
    }

    return (
        <>
        { isLoggedIn?<Outlet/>:<Home/>}
        </>
    )
}

export default Guard