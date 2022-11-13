import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
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
            isEditModalOpen : false
        };
    }
    
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
            <div className='holder'>
                <div className="box" key={this.props.Libri_ID}>
                    <p>{this.props.Titulli}</p>
                    <p>{this.props.Faqet}</p>
                    <p>{this.props.Disponueshmeria}</p>
                    <p>{this.props.Viti}</p>
                    <p>{this.props.PershkrimiLibrit}</p>
                    <p>{this.props.EmriKategorise}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit Book
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditLiber
                        isEditModalOpen={this.state.isEditModalOpen}
                        libLibri_ID={this.props.Libri_ID}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteLiber(this.props.Libri_ID)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}