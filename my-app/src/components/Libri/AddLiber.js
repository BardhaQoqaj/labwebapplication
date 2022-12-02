import React,{Component} from "react";
import {Button,Form,Image} from 'react-bootstrap';
import './libstyle.css';
import {Modal} from 'reactstrap';

export class AddLiber extends Component{
    constructor(props){
        super(props);
        //this.handleSubmit=this.handleSubmit.bind(this)
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    imagescr = "http://localhost:5000/Photos/"+this.filename;

    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen : !super.state.isModalOpen
            }
        })
    }

    // handleSubmit(event){
    //     event.preventDefault();
    //     fetch("http://localhost:5000/api/Libri",{
    //     method:"POST",
    //     headers:{
    //         'Accept':'application/json',
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         Titulli:event.target.Titulli.value,
    //         Faqet:event.target.Faqet.value,
    //         Disponueshmeria:event.target.Disponueshmeria.value,
    //         Viti:event.target.Viti.value,
    //         PershkrimiLibrit:event.target.PershkrimiLibrit.value,
    //         EmriKategorise:event.target.EmriKategorise.value,
    //     })
    // })
    // .then(res=>res.json())
    // .then((result)=>{
    //     alert(result);
    // },
    // (error)=>{
    //     alert('Insertion failed!');
    // })
    // }

    handleFileSelected(event){
        event.preventDefault();
        this.Titulli=event.target.Titulli.value;
        this.Faqet=event.target.Faqet.value;
        this.Disponueshmeria=event.target.Disponueshmeria.value;
        this.PershkrimiLibrit=event.target.PershkrimiLibrit.value;
        this.EmriKategorise=event.target.EmriKategorise.value;
        this.filename=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name,
            event.target.Titulli,
            event.target.Disponueshmeria,
            event.target.PershkrimiLibrit,
            event.target.EmriKategorise
          
        );
        fetch("http://localhost:5000/api/Libri/",{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            //this.imagesrc="http://localhost:5000/Photos/"+result;
            alert(result);
        },
        (error)=>{
            alert('photo insertion failed');
        })
    }


    render(){
        return(
            <Modal isOpen={true}>
            <div className="container" >
                <div className="modal-content" style={{height: '900px'}}>
                    <div className="modal-header">
                        <h3 className="modal-title">Add a Book</h3>
                    </div>
                    <div className="modal-mody">
                        {/* <Form onSubmit={this.handleSubmit}> */}
                        <Form onSubmit={this.handleFileSelected}>

                            <div className="rows">
                                <Form.Label>Titulli:</Form.Label>
                                <Form.Control type="text" name="Titulli" 
                                                required placeholder="Titulli"/>

                            </div>
                            <div className="rows">
                                <Form.Label>Faqet:</Form.Label>
                                <Form.Control type="text" name="Faqet" 
                                                required placeholder="Faqet"/>

                            </div>
                            <div className="rows">
                                <Form.Label>Disponueshmeria:</Form.Label>
                                <Form.Control type="text" name="Disponueshmeria" 
                                                required placeholder="Disponueshmeria"/>

                            </div>
                            <div className="rows">
                                <Form.Label>Viti:</Form.Label>
                                <Form.Control type="text" name="Viti" 
                                                required placeholder="Viti"/>

                            </div>
                            <div className="rows">
                                <Form.Label>PershkrimiLibrit:</Form.Label>
                                <Form.Control type="text" name="PershkrimiLibrit" 
                                                required placeholder="PershkrimiLibrit"/>

                            </div>
                            <div className="rows">
                                <Form.Label>EmriKategorise:</Form.Label>
                                <Form.Control type="text" name="EmriKategorise" 
                                                required placeholder="EmriKategorise"/>

                            </div>
                            
                            <div>
                                <Image width="200px" height="200px" src={"/images/" + this.filename}/>
                                <input onChange={this.handleFileSelected} type="File"/>
                            </div>

                            <div>
                                <button type="submit" className="add-btn">
                                Add Book
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