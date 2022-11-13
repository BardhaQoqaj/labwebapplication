import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditTransport extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Transporti",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:event.target.id.value,
            lloji:event.target.lloji.value,
            Sasia:event.target.Sasia.value
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
                                <h3 className="modal-title">Edit this Transport</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="id">
                                                    <Form.Label>id</Form.Label>
                                                    <Form.Control type="text" name="id" 
                                                    required disabled 
                                                    defaultValue={this.props.tid}
                                                    placeholder="id"/>
                                                </Form.Group>

                                                <Form.Group controlId="lloji">
                                                    <Form.Label>lloji</Form.Label>
                                                    <Form.Control type="text" name="lloji" 
                                                    required 
                                                    defaultValue={this.props.tlloji}
                                                    placeholder="lloji"/>
                                                </Form.Group>

                                                <Form.Group controlId="Sasia">
                                                    <Form.Label>Sasia</Form.Label>
                                                    <Form.Control type="text" name="Sasia" 
                                                    required 
                                                    defaultValue={this.props.tSasia}
                                                    placeholder="Sasia"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Transport
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