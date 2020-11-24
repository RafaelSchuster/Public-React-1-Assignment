import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let counter = 0;

class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             title: '', 
             text : '',
        }
    }
    onTitleChange = (event) => {
        this.setState({title : event.target.value});
    }
    onNoteChange = (event) => {
        this.setState({text : event.target.value});
    }
    onSubmiting = (event) => {
        event.preventDefault(); 
        const newNote = {
            id : counter,
            title : this.state.title,
            text : this.state.text,
            date : new Date().toString().split(' ').slice(0,5).join(' ')
        }
        counter++;
        this.props.onAddNote(newNote);
    }
    render(){
        return(
            <Container>
            <Form className='mt-5' onSubmit = { event => this.onSubmiting(event)}>
                <Form.Group>
                    <h1>Your Notes App For Free</h1>
                    <Form.Control 
                    className='m-3' 
                    placeholder='Write Your Title Here...' 
                    as="textarea" rows={1} 
                    name='title'
                    id='title'
                    onChange ={event =>this.onTitleChange(event)}/>
                    <Form.Control 
                    className='m-3' 
                    placeholder='Write Your Note Here...' 
                    as="textarea" rows={5}
                    name='note'
                    id='note'
                    onChange ={event => this.onNoteChange(event)} />
                    <Button 
                    className='btn btn-info btn-lg btn-block m-3' 
                    type ='submit' 
                    >Create a Note</Button> 
                </Form.Group>
            </Form> 
            </Container> 
        )
    }
}
export default MyForm;