

const ModalPreview = (props) => {

    return (
        <div className='w-2/12'>
            <img onClick={() => props.setimg(props.item.file)} src={props.item.file} alt="" />
            <p>{props.item.name}</p>
        </div>
    )
}

export default ModalPreview