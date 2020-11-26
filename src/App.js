import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './Components/myform';
import NotesList from './Components/notelist';

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
    let confirmation = window.confirm("Are you sure you want to delete this note?");
    if(confirmation){
      let arr = this.state.notes;
      let indexForDelete;
      arr.forEach(element => {
        if(element.date === date){
          indexForDelete = arr.indexOf(element);
      };
    });
    arr.splice(indexForDelete,1);
    this.setState({notes : arr});
      };
    }

    changeNote(title, text, date){
      let confirmation = window.confirm("Are you sure you want to change this note?");
      if(confirmation){
        let arr2 = this.state.notes;
        let indexForEdit;
        arr2.forEach(element => {
        if(element.date === date){
          indexForEdit = arr2.indexOf(element);
        }})
          if(title){arr2[indexForEdit].title = title};
          if(text){arr2[indexForEdit].text = text; arr2[indexForEdit].date = new Date().toString().split(' ').slice(0,5).join(' ') };
          this.setState({notes : arr2});
          };
      }    
    render(){
      return(
        <div>
        <MyForm onAddNote = {newNote => this.handleNewNotes(newNote)}/>
        <NotesList notes = {this.state.notes} 
          onNoteDelete = {date => this.handleDeletes(date)} 
          noteChange = {(title,text, date) => this.changeNote(title,text, date) }/>
      </div>
   )
 }  
}

export default App;
