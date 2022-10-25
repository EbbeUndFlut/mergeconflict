const CategoryList = (props) => {
    return (
        <div>
            {props.categories.map((item, key) =>
                <div key={key} className="flex flex-row">
                    <p>{item.name}</p><button onClick={() => props.delete(item._id)} className='border bg-red-600 hover:bg-red-900 p-2 mx-4'>delete</button>
                </div>
            )}
        </div>
    )
}

export default CategoryList