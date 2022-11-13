import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditPagesFizike extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/PagesaFizike",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:event.target.id.value,
            PiniIKarteles:event.target.PiniIKarteles.value
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
                                <h3 className="modal-title">Edit this Pages Fizike</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="id">
                                                    <Form.Label>id</Form.Label>
                                                    <Form.Control type="text" name="id" 
                                                    required disabled 
                                                    defaultValue={this.props.pfid}
                                                    placeholder="id"/>
                                                </Form.Group>

                                                <Form.Group controlId="PiniIKarteles">
                                                    <Form.Label>PiniIKarteles</Form.Label>
                                                    <Form.Control type="text" name="PiniIKarteles" 
                                                    required 
                                                    defaultValue={this.props.pfPiniIKarteles}
                                                    placeholder="PiniIKarteles"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Pages Fizike
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