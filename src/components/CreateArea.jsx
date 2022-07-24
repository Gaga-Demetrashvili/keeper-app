import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props){
    const [isExpanded, setExpanded] = useState(false)

    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });
     
    function handler(event){
        const {value, name} = event.target;

        setInputText(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        })
    }

    function expand(){
        setExpanded(true);
    }

    return (
    <div>
        <form className="create-note">
            {isExpanded && <input type="text" name="title" onChange={handler} placeholder="Title" value={inputText.title}/>}
            <textarea onClick = {expand} type="text" name="content" onChange={handler} placeholder="Take a note..." rows={isExpanded? 3 : 1} value={inputText.content}/>
            <Zoom in={isExpanded? true : false}>
                <Fab onClick={(event) => {
                    event.preventDefault();
                    props.onClick(inputText);
                    setInputText({
                        title: "",
                        content: ""
                    })
                }}>
                    <AddIcon />
                </Fab>
            </Zoom>
        </form>
    </div> )
}


export default CreateArea;