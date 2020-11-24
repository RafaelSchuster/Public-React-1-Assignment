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
      return {notes: [newNote, ...state.notes]};
    })
  }
 render(){
   return(
     <div>
    <MyForm onAddNote = {newNote => this.handleNewNotes(newNote)}/>
    <NotesList notes = {this.state.notes}/>
  </div>
   )
 }  
}

export default App;
