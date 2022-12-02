import React,{Component} from "react";
import {Button,Form} from 'react-bootstrap';
import './style.css';
import {Modal} from 'reactstrap';

export class AddPagesOnline extends Component{
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
        fetch("http://localhost:5000/api/PagesaOnline",{
        method:"POST",
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
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
                        <h3 className="modal-title">Shto nje Pages ne forme Online</h3>
                    </div>
                    <div className="modal-mody">
                        <Form onSubmit={this.handleSubmit}>

                            <div className="rows">
                                <Form.Label>NrKarteles:</Form.Label>
                                <Form.Control type="text" name="NrKarteles" 
                                                required placeholder="NrKarteles"/>

                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Pages Online
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