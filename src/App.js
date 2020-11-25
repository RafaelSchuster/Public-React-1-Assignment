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
  handleDeletes(date){
    let confirmation = window.confirm("Are you sure you want to delete this note?")
    if(confirmation){
      let arr = this.state.notes;
      let indexForDelete;
       arr.forEach(element => {
        if(element.date === date){
          indexForDelete = arr.indexOf(element)
      }})
    console.log(arr,date, indexForDelete)
    arr.splice(indexForDelete,1);
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
