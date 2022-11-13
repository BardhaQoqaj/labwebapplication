import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddLiber extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen : !super.state.isModalOpen
            }
        })
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Libri",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Titulli:event.target.Titulli.value,
            Faqet:event.target.Faqet.value,
            Disponueshmeria:event.target.Disponueshmeria.value,
            Viti:event.target.Viti.value,
            PershkrimiLibrit:event.target.PershkrimiLibrit.value,
            EmriKategorise:event.target.EmriKategorise.value,
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Insertion failed!');
    })
    }

    render(){
        return(
            <Modal isOpen={true}>
            <div className="container">
                <div className="modal-content" >
                    <div className="modal-header">
                        <h3 className="modal-title">Add a Book</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>Titulli:</Form.Label>
                                <Form.Control type="text" name="Titulli" 
                                                required placeholder="Titulli"/>

                            </div>
                            <div className="rows">
                                <Form.Label>Faqet:</Form.Label>
                                <Form.Control type="text" name="Faqet" 
                                                required placeholder="Faqet"/>

                            </div>
                            <div className="rows">
                                <Form.Label>Disponueshmeria:</Form.Label>
                                <Form.Control type="text" name="Disponueshmeria" 
                                                required placeholder="Disponueshmeria"/>

                            </div>
                            <div className="rows">
                                <Form.Label>Viti:</Form.Label>
                                <Form.Control type="text" name="Viti" 
                                                required placeholder="Viti"/>

                            </div>
                            <div className="rows">
                                <Form.Label>PershkrimiLibrit:</Form.Label>
                                <Form.Control type="text" name="PershkrimiLibrit" 
                                                required placeholder="PershkrimiLibrit"/>

                            </div>
                            <div className="rows">
                                <Form.Label>EmriKategorise:</Form.Label>
                                <Form.Control type="text" name="EmriKategorise" 
                                                required placeholder="EmriKategorise"/>

                            </div>


                            <div>
                                <button type="submit" className="add-btn">
                                Add Book
                                </button>
                            </div> 

                            <div className="modal-footer">
                                <button onClick={this.props.onClose } className="button">Close</button>
                            </div> 
                        </Form>
                    </div>
                </div>
            </div>
            </Modal>
        )
    }
} 