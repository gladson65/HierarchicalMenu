import MenuItem from "./MenuItem";



function HierarchicalMenu({ items }) {

    return (
        <>
            <nav>
                <ul>
                    {
                        items.map((item) => {
                            return <MenuItem key={item.id} item={item}/>
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default HierarchicalMenu;