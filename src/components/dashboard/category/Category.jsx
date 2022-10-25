import { useEffect, useState } from "react"
import { useRef } from "react"
import CategoryList from "./CategoryList"

const Category = () => {
    const [categories, setCategories] = useState([])
    const newcat = useRef()

    const addCategory = async () => {

        console.log(newcat.current.value);
        const category = {
            name: newcat.current.value
        }
        const result = await fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/categories', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(category)
        })

        if (result.status === 200) loadCategories()


    }
    const loadCategories = async () => {
        const result = await fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/categories')
        const data = await result.json()
        setCategories(data)
    }

    const deleteCategory = async (id) => {
        const result = await fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/categories', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({ id })
        })

        await loadCategories()
    }

    useEffect(() => {
        loadCategories()
    }, [])
    return (
        <div className="flex flex-row justify-around basis-full">
            <div>
                <p>Add new category</p>
                <input className='outline outline-1 text-xl py-1' type='text' ref={newcat} />
                <button onClick={addCategory} >Add</button>
            </div>
            <CategoryList categories={categories} delete={deleteCategory} />
        </div>
    )
}

export default Category