import React, { useState } from "react";
import * as Component from "../styles/components/ItemList";
import { Item } from "../types/item";

interface Props {
    item: Item;
}

const ItemList: React.FC <Props>= ({ item })=>{
    const [ isChecked, setIsChecked ] = useState(item.done);
    return(
        <Component.Container done={isChecked}>
            <Component.Input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <Component.Name>{item.name}</Component.Name>
        </Component.Container>
    );
}

export default ItemList;