import React from 'react';
import NoteItem from './noteitem';

function NotesList(props){
    return <ul className="grid">
            {props.notes.map(note =>
                <NoteItem
                key ={note.date}
                title={note.title}
                text = {note.text}
                date ={note.date}
                />
            )}
        </ul>  
}

export default NotesList;
