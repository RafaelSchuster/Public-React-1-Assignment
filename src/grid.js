import React from 'react'
let counter = 0;
let arrNotes = []

class Grid extends React.Component{
    render(){
        const myNotes = Object.values(this.props.notes)
        console.log(myNotes)
        arrNotes[counter] = myNotes
        counter++
    return(
        <div> 
              {arrNotes.map(note => <p key = {counter}>{note[0]} {note[1]}</p>)} 
        </div>

    )
    
    }
}

export default Grid;