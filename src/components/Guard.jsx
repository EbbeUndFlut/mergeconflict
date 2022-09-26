import { useEffect, useState } from "react"
import { Outlet, useNavigate } from "react-router-dom"

const Guard = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const navigate = useNavigate()
    
    // useEffect(async()=> {
    //     const getSome = async() => {
    //       const result = await fetch('http://localhost:9898/api/validate', {
    //         method: 'POST',
    //         credentials: 'include'
    //     })
    //     const data = await result.json()
    //     setIsLoggedIn(data.state)  
    //     }
    //     await getSome()
    // }, [])

    const check = () =>{
        if(true) return <Outlet></Outlet>
        navigate('/')
    }

    return (
        <>
        { check() }
        </>
    )
}

export default Guard