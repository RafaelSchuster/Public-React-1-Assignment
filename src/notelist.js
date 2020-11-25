import React from 'react';
import NoteItem from './noteitem';

class NotesList extends React.Component{
    deleting(date){
        this.props.onNoteDelete(date)
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
                onDeleting = {date => this.deleting(date)} />
            )}
        </ul>  
        }
    } 

export default NotesList;
