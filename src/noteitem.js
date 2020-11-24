import React from 'react';

function NoteItem(props){
    console.log(typeof props.date)
    return (
        <li>
            <h4>{props.title.toUpperCase()}</h4> 
            <span className="text-muted text">{props.text}</span> <span className="lead">({props.date})</span>
        </li>
    )
}
export default NoteItem;