import { useRef } from "react"
import { useState } from "react"

const BrokeTextEditor = (props) => {
    const [active, setActive] = useState(false)
    const [header, setHeader] = useState(false)
    const editor = useRef()

    const activate = (e) => {
        console.log(e.target);
        if(active && !header)
            editor.current = e.target
        setActive(true)
        
    }
    const edit = (e) => {
        if (active) {
            if (e.key === 'Enter') {
                editor.current.innerHTML += '<br />'
            }
            else if( e.key !== 'Shift' && e.key !== 'Backspace') {
                editor.current.innerHTML += e.key
            }

        }
    }

    const makebig = () => {
        setHeader(prev => !prev)
        if (!header) {
            console.log(editor.current);
            editor.current.innerHTML += '<h1>'
            const header = editor.current.children[editor.current.children.length - 1]
            header.classList.add('text-xl')
            console.log(editor.current.children[editor.current.children.length - 1]);
            editor.current = header
        } else {
            console.log('In else', editor.current.parentNode);
            editor.current = editor.current.parentElement
        }
    }
    const publish = () => {
        console.log('Das ist die REF', editor.current.innerHTML);
    }
    return (
        <div className="flex flex-col w-full">
            <button className={header ? 'bg-mainpurple' : 'bg-secondpurple'} onClick={makebig}>H1</button>
            <button onClick={publish}>Publish</button>
            <div tabIndex={0} ref={editor} onClick={activate} onKeyDown={edit} className="h-screen w-full p-8 bg-slate-100">
                { active && 
                <span className="w-[10px] h-[20px] bg-mainpurple"> </span>
                }
            </div>
        </div>
    )
}

export default BrokeTextEditor