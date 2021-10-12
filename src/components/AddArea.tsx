import React, { useState, KeyboardEvent } from "react";
import * as Component from "../styles/components/AddArea";

interface Props {
    onEnter: (taskname: string)=> void;
}

const AddArea:React.FC <Props> = ({onEnter})=>{
    const [ inputText, setInputText ] = useState('');
    const handleKeyUp = (e:KeyboardEvent)=>{
        if(e.code === "Enter" && inputText !== ""){
            onEnter(inputText);
        }
    }
    return(
        <Component.Container>
            <div className="image">➕</div>
            <input 
                type="text"  
                placeholder="Adicione uma Tarefa"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Component.Container>
    );
}

export default AddArea;