
import { useState } from "react"
import { useEffect } from "react"

const SearchCounter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/statistic/search', {
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => setCount(data.searches))
    }, [])
    return (
        <div className="m-5 p-5 border text/center">
            <p className="text-white">Suchen insgesamt</p>
            <p className="text-center text-4xl text-white">{count}</p>
        </div>
    )
}

export default SearchCounter