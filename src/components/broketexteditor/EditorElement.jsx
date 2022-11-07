import CodeSnippet from "./elements/CodeSnippet"
import HeadingElement from "./elements/HeadingElement"
import ImageElement from "./elements/ImageElement"
import TextElement from "./elements/TextElement"

const EditorElement = (props) => {
    const elementSelect = () => {
        switch (props.element) {
            case 0: return <HeadingElement />
            case 1: return <TextElement />
            case 2: return <ImageElement />
            case 3: return <CodeSnippet />
            default: return <TextElement />
        }
    }
    return elementSelect()
}
export default EditorElement