import React,{Component} from "react";
import {Form} from 'react-bootstrap';
import {Modal} from 'reactstrap';
import './style.css';

export class EditKategori extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:5000/api/Kategoria",{
        method:"PUT",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            Kategoria_ID:event.target.Kategoria_ID.value,
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
                                <h3 className="modal-title">Edit this category</h3>
                            </div>
                            <div className="modal-mody">
                                <Form onSubmit={this.handleSubmit}>

                                    <div className="rows">
                                                <Form.Group controlId="Kategoria_ID">
                                                    <Form.Label>Kategoria_ID</Form.Label>
                                                    <Form.Control type="text" name="Kategoria_ID" 
                                                    required disabled 
                                                    defaultValue={this.props.katKategoria_ID}
                                                    placeholder="ID"/>
                                                </Form.Group>

                                                <Form.Group controlId="EmriKategorise">
                                                    <Form.Label>EmriKategorise</Form.Label>
                                                    <Form.Control type="text" name="EmriKategorise" 
                                                    required 
                                                    defaultValue={this.props.katEmriKategorise}
                                                    placeholder="name"/>
                                                </Form.Group>

                                                

                                    </div>

                                                <Form.Group>
                                                    <button variant="primary" type="submit">
                                                        Update Category
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