import React from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Grid from './grid'



class MyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            text : '',
            date : new Date()
        }
    }
    // onTitleChange = (event) => {
    //     event.preventDefault()
    //     const value = event.target.value
    //     this.setState({title : value})
    //     console.log(this.state.title)

    // }
    // onNoteChange = (event) => {
    //     event.preventDefault() 
    //     const value = event.target.value
    //     this.setState({text : value})
    // }

    onSubmiting = (event) => {
        event.preventDefault(); 
        const value = event.target.value;
        this.setState({text:value});
    }
    render(){
        return(
            <Container>
            <Form className='mt-5'>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <h1>YourNotes App For Free</h1>
                    <Form.Control className='m-3' placeholder='Write Your Title Here...' as="textarea" rows={1}/>
                <Form.Control className='m-3' placeholder='Write Your Note Here...' as="textarea" rows={5} />
                 <Button className='btn btn-info btn-lg btn-block m-3' type ='submit' onChange={event => this.onSubmiting(event)}>Create a Note</Button> 
                </Form.Group>
            </Form> 
            <Grid notes = {this.state} />
            </Container> 
        )
    }
}
export default MyForm;