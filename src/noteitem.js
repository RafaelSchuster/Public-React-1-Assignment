import React , {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

function NoteItem(props) {
    const onDelete = (date) =>{
        props.onDeleting(date);
    }
        const [modalIsOpen, setModalIsOpen] = useState(false)
        return (
        <div className="card">
            <div className="card-header">
            <h4>{props.date}</h4>
            </div>
            <div className="card-body">
            <h2 className="card-title">{props.title.toUpperCase()}</h2>
            <h3 className="text-muted text">{props.text}</h3>
            <button className="btn btn-warning delBtn" onClick={() => onDelete(props.date)}>Delete</button>
            <button type="button" className = "btn btn-outline-success openModalBtn" onClick={()=>setModalIsOpen(true)}>Open Modal</button>
            <Modal 
            style={
                {overlay:{backgroundColor : 'gray' },
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
                     Close Modal
                     </button>
                     <button type="button" class="btn btn-outline-info btn-lg btn-block editNoteBtn">Edit Note</button>
                </div>
                </Modal>
            </div>
        </div>   
    )
     
}
export default NoteItem;