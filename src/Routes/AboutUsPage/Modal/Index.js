import React , {useState} from 'react'
import "./style.css";
import Modal from 'react-modal';
function ModalI() {
    
    const [modalIsOpen, setModalIsOpen]=useState(false);

    return (
        <>
        <div>
            <button className="btn-modal"  onClick={()=>setModalIsOpen(true)}>Click here</button>
        </div>

        <Modal isOpen={modalIsOpen}> 
        <div className="overlay"> </div>
        <div className="modal-content">
            <h3 className="heading"> Achievements </h3>
            <p className="content"> Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
            <h3>Contribution</h3>
            <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>

            <button className="closebutton" onClick={()=>setModalIsOpen(false)}>Close </button> 
        </div> 
        </Modal>
        </>
    )
}


export default ModalI;