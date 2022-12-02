import React, {Component} from 'react'
 import { LibriH2,
         LibriD, LibriCard, LibriWrapper,
          LibriIdP, LibriV,LibriPP, LibriE,LibriIcon,OptionsP} from './LibriElements'

import { Button, ButtonToolbar,Image } from 'react-bootstrap'
//import axios from 'axios'
import { EditLiber } from './EditLiber';

export class Libri extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            Libri_ID : [],
            Titulli : [],
            Faqet : [],
            Disponueshmeria : [],
            Viti : [],
            PershkrimiLibrit : [],
            EmriKategorise : [],
            FileName : [],
            imagesrc: [],
            isEditModalOpen : false
        };
    }
    imagesrc = process.env.REACT_APP_PHOTOPATH + this.props.FileName;
    
    toggleUserEditModal = ()=>{
        this.setState((state)=>{
            return{
                isEditModalOpen: !state.isEditModalOpen
            }
        })
    }

        //delete function
        deleteLiber(libLibri_ID){
            if(window.confirm('Are you sure you want to delete this Book?')){
                fetch("http://localhost:5000/api/Libri/"+libLibri_ID,{
                    method:'DELETE',
                    header:{
                        'Accept':'application/json',
                        'Content-Type':'application/json'
                    }
                })
            }
        }

    render(){
        return (
            <div>
                <LibriCard>
                <LibriIcon src={"/images/" + this.props.FileName} ></LibriIcon>
                <LibriIdP key={this.props.Libri_ID}/>
                    <LibriH2>Titulli: {this.props.Titulli}</LibriH2>
                    <LibriH2>Nr.Faqeve:  {this.props.Faqet}</LibriH2>
                    <LibriD>Disponueshmeria: {this.props.Disponueshmeria}</LibriD>
                    <LibriV>Viti Botimit: {this.props.Viti}</LibriV>
                    <LibriPP>Pershkrim i Librit: {this.props.PershkrimiLibrit}</LibriPP>
                    <LibriE>Kategoria: {this.props.EmriKategorise}</LibriE>

                    <ButtonToolbar>
                        <Button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit Book
                        </Button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditLiber
                        isEditModalOpen={this.state.isEditModalOpen}
                        libLibri_ID={this.props.Libri_ID}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteLiber(this.props.Libri_ID)}>
                                Delete
                        </Button>
                    </ButtonToolbar>
                    </LibriCard>
                
                </div>
            
        )
}
}