import React, { useState } from "react";
import * as Component from "../styles/pages/Home";
import Header from "../components/Header";
import ItemList from "../components/ItemList";
import AddArea from "../components/AddArea";

import { Item } from "../types/item"

const Home = ()=>{
    const [ list, setList ] = useState<Item[]>([
        {
            id: 0,
            name: "Colocar mais itens",
            done: false,
        }
    ]);
    const handleAddTask = (taskname: string)=>{
        let newList = [...list];
        newList.push({
            id: list.length +1,
            name: taskname,
            done: false,
        });
        setList(newList);
    }
    return(
        <Component.Container>
            <Header/>
            <AddArea onEnter={handleAddTask}/>
            {
                list.map((item, index)=>{
                    return(
                        <ItemList key={index} item={item}/>
                    );
                })
            }
        </Component.Container>
    );
}

export default Home