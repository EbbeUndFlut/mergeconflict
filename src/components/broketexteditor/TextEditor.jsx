/**
 * setzten von contenteditable auf true
 */

import { useState } from "react"
import { useRef } from "react"
import EditorElement from "./EditorElement"

const TextEditor = () => {
    const post = useRef()
    const [elements, setElements] = useState([])
    const addField = (value) =>{
        setElements((prev => [...prev, value]))
    }
    const publish = () => {
        console.log(post.current.innerHTML.replaceAll('contenteditable="true"', ''));
    }
    return (
        <section>
            <div ref={post} className="min-h-[200px] w-full">
                {elements.map((item, key) => 
                    <EditorElement key={key} element={item}></EditorElement>
                )}
            </div>
            <button onClick={() => addField(0)}>H1</button>
            <button onClick={() => addField(1)}>P</button>
            <button onClick={() => addField(2)}>img</button>
            <button onClick={publish}>publish</button>
        </section>
    )
}

export default TextEditor