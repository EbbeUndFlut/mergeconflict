/**
 * setzten von contenteditable auf true
 */

import { useState } from "react"
import { useRef } from "react"
import EditorElement from "./EditorElement"

const TextEditor = () => {
    const post = useRef()
    const [elements, setElements] = useState([])
    const addField = (value) => {
        setElements((prev => [...prev, value]))
    }
    const publish = () => {
        const content = {
            data: post.current.innerHTML.replaceAll('contenteditable="true"', '')
        }
        fetch(process.env.REACT_APP_SERVER_BASE_URL + '/api/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(content)
        })
            .then(result => {
                if (result.status === 200) {
                    setElements([])
                }
            })
    }
    return (
        <section className="m-5 bg-white">
            <div ref={post} className="min-h-[200px] w-full">
                {elements.map((item, key) =>
                    <EditorElement key={key} element={item}></EditorElement>
                )}
            </div>
            <div className="flex flex-row gap-11">
                <button onClick={() => addField(0)}>H1</button>
                <button onClick={() => addField(1)}>P</button>
                <button onClick={() => addField(2)}>img</button>
                <button onClick={publish}>publish</button>
            </div>

        </section>
    )
}

export default TextEditor