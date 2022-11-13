import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditAutor extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Autor",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            ID:event.target.ID.value,
            name:event.target.name.value,
            libri:event.target.libri.value
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
                                <h3 className="modal-title">Edit this Autor</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                                <Form.Group controlId="ID">
                                                    <Form.Label>ID</Form.Label>
                                                    <Form.Control type="text" name="ID" 
                                                    required disabled 
                                                    defaultValue={this.props.auId}
                                                    placeholder="ID"/>
                                                </Form.Group>

                                                <Form.Group controlId="name">
                                                    <Form.Label>name</Form.Label>
                                                    <Form.Control type="text" name="name" 
                                                    required 
                                                    defaultValue={this.props.auname}
                                                    placeholder="name"/>
                                                </Form.Group>

                                                <Form.Group controlId="libri">
                                                    <Form.Label>libri</Form.Label>
                                                    <Form.Control type="text" name="libri" 
                                                    required 
                                                    defaultValue={this.props.aulibri}
                                                    placeholder="libri"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Autor
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