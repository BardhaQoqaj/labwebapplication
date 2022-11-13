import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditPagesOnline extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/PagesaOnline",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:event.target.id.value,
            NrKarteles:event.target.NrKarteles.value
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
                                <h3 className="modal-title">Edit this Pages Online</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="id">
                                                    <Form.Label>id</Form.Label>
                                                    <Form.Control type="text" name="id" 
                                                    required disabled 
                                                    defaultValue={this.props.paoid}
                                                    placeholder="id"/>
                                                </Form.Group>

                                                <Form.Group controlId="NrKarteles">
                                                    <Form.Label>NrKarteles</Form.Label>
                                                    <Form.Control type="text" name="NrKarteles" 
                                                    required 
                                                    defaultValue={this.props.paoNrKarteles}
                                                    placeholder="NrKarteles"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Pages Online
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