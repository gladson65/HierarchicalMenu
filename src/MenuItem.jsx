import { useState } from "react";

function MenuItem({ item }) {

    const [ isOpen, setIsOpen ] = useState(false);

    function toggleSubMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <li>
                <div onClick={toggleSubMenu}>
                    {item.label} {item.children && (isOpen ? '▲' : '▼')}
                </div>
                
                {
                    item.children && isOpen && (
                        <ul>
                            {
                                item.children.map((subItem) => (
                                    <MenuItem key={subItem.id} item={subItem} />
                                ))
                            }
                        </ul>
                )}
            </li>
        </>
    )
}

export default MenuItem;