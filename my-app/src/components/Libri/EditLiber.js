import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditLiber extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Libri",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Libri_ID:event.target.Libri_ID.value,
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
                                <h3 className="modal-title">Edit this Book</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="FId">
                                                    <Form.Label>Libri_ID</Form.Label>
                                                    <Form.Control type="text" name="Libri_ID" 
                                                    required disabled 
                                                    defaultValue={this.props.libLibri_ID}
                                                    placeholder="Libri_ID"/>
                                                </Form.Group>

                                                <Form.Group controlId="Titulli">
                                                    <Form.Label>Titulli</Form.Label>
                                                    <Form.Control type="text" name="Titulli" 
                                                    required 
                                                    defaultValue={this.props.libTitulli}
                                                    placeholder="Titulli"/>
                                                </Form.Group>

                                                <Form.Group controlId="Faqet">
                                                    <Form.Label>Faqet</Form.Label>
                                                    <Form.Control type="text" name="Faqet" 
                                                    required 
                                                    defaultValue={this.props.libFaqet}
                                                    placeholder="Faqet"/>
                                                </Form.Group>

                                                <Form.Group controlId="Disponueshmeria">
                                                    <Form.Label>Disponueshmeria</Form.Label>
                                                    <Form.Control type="text" name="Disponueshmeria" 
                                                    required 
                                                    defaultValue={this.props.libDisponueshmeria}
                                                    placeholder="Disponueshmeria"/>
                                                </Form.Group>

                                                <Form.Group controlId="Viti">
                                                    <Form.Label>Viti</Form.Label>
                                                    <Form.Control type="text" name="Viti" 
                                                    required 
                                                    defaultValue={this.props.libViti}
                                                    placeholder="Viti"/>
                                                </Form.Group>

                                                <Form.Group controlId="PershkrimiLibrit">
                                                    <Form.Label>PershkrimiLibrit</Form.Label>
                                                    <Form.Control type="text" name="PershkrimiLibrit" 
                                                    required 
                                                    defaultValue={this.props.libPershkrimiLibrit}
                                                    placeholder="PershkrimiLibrit"/>
                                                </Form.Group>

                                                <Form.Group controlId="EmriKategorise">
                                                    <Form.Label>EmriKategorise</Form.Label>
                                                    <Form.Control type="text" name="EmriKategorise" 
                                                    required 
                                                    defaultValue={this.props.libEmriKategorise}
                                                    placeholder="EmriKategorise"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Book
                                                    </button>
                                                </Form.Group>

                                                <div className="modal-footer">
                                                    <button onClick={this.props.onClose} className="button">Close</button>
                                                </div> 
                                </Form>
                            </div>
                        </div>
                    </div>
                </Modal>
        )
    }
}