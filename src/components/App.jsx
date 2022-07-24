import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
  const [notes, updateNotes] = useState([]);

  function add(item){
    updateNotes((prevValue) => {    
        return [...prevValue, item];    
    })
  }

  function deleteNote(id){
    updateNotes(prevValue => {
      return prevValue.filter((note, index) => {
        return index !== id;
      })
    })
  }

  return  <div>
      <Header />
      <CreateArea 
        onClick = {add}
      />
      {notes.map((note,index) => {
       return <Note 
          key = {index}
          id = {index}
          title = {note.title}
          content = {note.content}
          onClick = {deleteNote}
        />
      })}
      <Footer />
  </div>;
}

export default App;