import React, {Component} from 'react'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditAutor } from './EditAutor';

export class Autor extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            Id : [],
            name : [],
            libri : [],
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
        deleteAutor(auid){
            if(window.confirm('Are you sure you want to delete this Author?')){
                fetch("http://localhost:5000/api/Autor/"+auid,{
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
                <div className="box" key={this.props.auId}>
                    <p>{this.props.name}</p>
                    <p>{this.props.libri}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditAutor
                        isEditModalOpen={this.state.isEditModalOpen}
                        auId={this.props.auId}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteAutor(this.props.auId)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}