const CategoryList = (props) => {
    return (
        <div>
            {props.categories.map(item =>

                <p>{item.name}</p>
            )}
        </div>
    )
}

export default CategoryList