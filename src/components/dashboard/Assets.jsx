
const Assets = (props) => {

    const removeImage = () => {
        console.log("die id", props.item._id);
    }
    return (
        <div className='w-2/12'>
            <img src={props.item.file} alt="" />
            <p>{props.item.name}</p>
            <button onClick={removeImage}>DELETE</button>
        </div>
    )
}

export default Assets