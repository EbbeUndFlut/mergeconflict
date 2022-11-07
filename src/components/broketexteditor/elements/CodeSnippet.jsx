const CodeSnippet = () => {
    return (
        <div className="bg-slate-500 rounded-t-xl w-1/3">
            <div className="bg-black flex flex-row justify-start items-center h-8 gap-1 rounded-t-xl px-3">
                <div className="rounded-full w-[10px] h-[10px] bg-red-600"></div>
                <div className="rounded-full w-[10px] h-[10px] bg-yellow-400"></div>
                <div className="rounded-full w-[10px] h-[10px] bg-green-400"></div>
            </div>
            <div contentEditable>Hallo</div>
        </div>
    )
}

export default CodeSnippet