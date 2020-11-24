import React from 'react';

class NoteItem extends React.Component{
    onDelete(id){
        this.props.onDeleting(id);
    }
    render(){
        return (
        <div className="card">
            <div className="card-header">
            <h4>{this.props.date}</h4>
            </div>
            <div className="card-body">
            <h2 className="card-title">{this.props.title.toUpperCase()}</h2>
            <h3 className="text-muted text">{this.props.text}</h3>
            <button className="btn btn-warning delBtn" onClick={() => this.onDelete(this.props.id)}>Delete</button>
            </div>
        </div>   
    )
    }  
}
export default NoteItem;