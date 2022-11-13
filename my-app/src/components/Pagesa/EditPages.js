import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditPages extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Pagesa",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:event.target.id.value,
            Cmimi:event.target.Cmimi.value,
            Zbritja:event.target.Zbritja.value
            
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
                                <h3 className="modal-title">Edit this Payment</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="id">
                                                    <Form.Label>id</Form.Label>
                                                    <Form.Control type="text" name="id" 
                                                    required disabled 
                                                    defaultValue={this.props.paid}
                                                    placeholder="id"/>
                                                </Form.Group>

                                                <Form.Group controlId="Cmimi">
                                                    <Form.Label>Cmimi</Form.Label>
                                                    <Form.Control type="text" name="Cmimi" 
                                                    required 
                                                    defaultValue={this.props.paCmimi}
                                                    placeholder="Cmimi"/>
                                                </Form.Group>

                                                <Form.Group controlId="Zbritja">
                                                    <Form.Label>Zbritja</Form.Label>
                                                    <Form.Control type="text" name="Zbritja" 
                                                    required 
                                                    defaultValue={this.props.paZbritja}
                                                    placeholder="Zbritja"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Payment
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