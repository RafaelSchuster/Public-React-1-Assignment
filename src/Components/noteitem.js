import React , {useState} from 'react';
import Modal from 'react-modal';
import {Button, Container, Form} from 'react-bootstrap';

Modal.setAppElement('#root')

function NoteItem(props) {
    let valueText = ''
    let valueTitle = ''
    const onDelete = (date) =>{
        props.onDeleting(date);
    }
    const onNoteChange = (event) => {
        valueText = event.target.value
    }
    const onTitleChange = (event) => {
        valueTitle = event.target.value
    }
    const onSubmitEdit = (event) =>{
        event.preventDefault()
        props.onEditing(valueTitle, valueText, props.date )
    }

        const [modalIsOpen, setModalIsOpen] = useState(false);
        const [modal2IsOpen, setModal2IsOpen] = useState(false);
        return (
        <div className="card">
            <div className="card-header">
                <h4>{props.date}</h4>
                </div>
                <div className="card-body">
                <h2 className="card-title">{props.title.toUpperCase()}</h2>
                <h3 className="text-muted text">{props.text}</h3>
                <button className="btn btn-danger delBtn" onClick={() => onDelete(props.date)}>Delete</button>
                <button type="button" className = "btn btn-success openModalBtn" onClick={()=>setModalIsOpen(true)}>Open Note</button>
                <Modal 
                style={
                    {overlay:{backgroundImage : 'url(./Images/Molecular' },
                    content:{color : 'rgb(4, 5, 19)',
                    top: '100px',
                width : '50%',
                height : '70%',
                display: 'block',
                marginLeft : 'auto',
                marginRight : 'auto' }}  
                }
                isOpen={modalIsOpen} 
                onRequestClose={()=>setModalIsOpen(false)}>
                    <h1 className='display-4 text-center mt-5 '>({props.date})</h1>
                    <h1 className='display-1 text-center mb-4 mt-5' > {props.title.toUpperCase()}</h1>
                    <h2 className='display-3 text-center '>{props.text}</h2>
                    <div>
                        <button className = "btn btn-outline-warning btn-lg btn-block closeModalBtn"
                        onClick= {()=> setModalIsOpen(false)} > 
                        Close Note
                        </button>
                        <button type="button" className="btn btn-info btn-lg btn-block editNoteBtn" 
                        onClick={()=> {setModal2IsOpen(true) } } >Edit Note</button>
                        <Modal 
                        style={
                            {overlay: {backgroundImage : 'url(./Images/Molecular' },
                            content: { color : 'rgb(4, 5, 19)' ,
                            top: '100px',
                            width : '50%',
                            height : '70%',
                            display: 'block',
                            marginLeft : 'auto',
                            marginRight : 'auto' }}  
                            }
                            isOpen={modal2IsOpen} 
                            onRequestClose={()=>setModal2IsOpen(false)}>
                            <Container>
                                <Form className='mt-5' onSubmit = { event => {onSubmitEdit(event); setModal2IsOpen(false)}}>
                                    <Form.Group>
                                        <h1>Edit</h1>
                                        <Form.Control 
                                        className='m-3' 
                                        placeholder='Write Your Title Here...' 
                                        as="textarea" rows={1} 
                                        name='title'
                                        id='title'
                                        defaultValue = {props.title}
                                        onChange ={event => onTitleChange(event)}
                                        />
                                        <Form.Control 
                                        className='m-3' 
                                        as="textarea" rows={5}
                                        name='note'
                                        id='note'
                                        onChange ={event => onNoteChange(event)}
                                        defaultValue = {props.text}
                                        required />
                                        <div className='text-center'>
                                            <Button 
                                            className='btn btn-info btn-lg m-3' 
                                            type ='submit' 
                                            >Save your changes</Button>
                                        </div>
                                        
                                        <button className = "btn btn-outline-warning btn-lg btn-block closeModalBtn"
                                            onClick= {()=> setModal2IsOpen(false)} > 
                                            Close Note
                                            </button> 
                                    </Form.Group>
                                </Form> 
                            </Container> 
                        </Modal>
                    </div>
                </Modal>
            </div>
        </div>   
    )    
}
export default NoteItem;