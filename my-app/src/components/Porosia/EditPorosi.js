import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditPorosi extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Porosia",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:event.target.id.value,
            Lexuesi:event.target.Lexuesi.value,
            Libri:event.target.Libri.value
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
                                <h3 className="modal-title">Edit this Order</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                    <Form.Group controlId="id">
                                                    <Form.Label>id</Form.Label>
                                                    <Form.Control type="text" name="id" 
                                                    required disabled 
                                                    defaultValue={this.props.pid}
                                                    placeholder="id"/>
                                                </Form.Group>

                                                <Form.Group controlId="Lexuesi">
                                                    <Form.Label>Lexuesi</Form.Label>
                                                    <Form.Control type="text" name="Lexuesi" 
                                                    required 
                                                    defaultValue={this.props.pLexuesi}
                                                    placeholder="Lexuesi"/>
                                                </Form.Group>

                                                <Form.Group controlId="Libri">
                                                    <Form.Label>Libri</Form.Label>
                                                    <Form.Control type="text" name="Libri" 
                                                    required 
                                                    defaultValue={this.props.pLibri}
                                                    placeholder="Libri"/>
                                                </Form.Group>

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Order
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