import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditLexues extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Lexuesi",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:event.target.id.value,
            emri:event.target.emri.value,
            mbiemri:event.target.mbiemri.value
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
                                <h3 className="modal-title">Edit this Reader</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="id">
                                                    <Form.Label>id</Form.Label>
                                                    <Form.Control type="text" name="id" 
                                                    required disabled 
                                                    defaultValue={this.props.lid}
                                                    placeholder="id"/>
                                                </Form.Group>

                                                <Form.Group controlId="emri">
                                                    <Form.Label>emri</Form.Label>
                                                    <Form.Control type="text" name="emri" 
                                                    required 
                                                    defaultValue={this.props.lemri}
                                                    placeholder="emri"/>
                                                </Form.Group>

                                                <Form.Group controlId="mbiemri">
                                                    <Form.Label>mbiemri</Form.Label>
                                                    <Form.Control type="text" name="mbiemri" 
                                                    required 
                                                    defaultValue={this.props.lmbiemri}
                                                    placeholder="mbiemri"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Reader
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