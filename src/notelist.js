import React from 'react';
import NoteItem from './noteitem';

class NotesList extends React.Component{
    deleting(id){
        this.props.onNoteDelete(id)
    }
    render(){
        return <ul className="grid">
            {this.props.notes.map(note =>
                <NoteItem
                key ={note.date}
                title={note.title}
                text = {note.text}
                date ={note.date}
                id = {note.id}
                onDeleting = {id => this.deleting(id)} />
            )}
        </ul>  
        }
    } 

export default NotesList;
