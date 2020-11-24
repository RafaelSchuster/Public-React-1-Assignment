import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './myform';
import NotesList from './notelist';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      notes : []
    }
  }
  handleNewNotes(newNote){
    this.setState(state=>{
      return {notes: [...state.notes, newNote]};
    })
  }
  handleDeletes(id){
    let confirmation = window.confirm("Are you sure you want to delete this note?")
    if(confirmation){
      let arr = this.state.notes;
    arr.splice(id,1);
    this.setState({notes : arr});
    }
    }
    
  
 render(){
   return(
     <div>
    <MyForm onAddNote = {newNote => this.handleNewNotes(newNote)}/>
    <NotesList notes = {this.state.notes} onNoteDelete = {id => this.handleDeletes(id)}/>
  </div>
   )
 }  
}

export default App;
