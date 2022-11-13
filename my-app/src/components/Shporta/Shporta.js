import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditShport } from './EditShport';

export class Shporta extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            sasia : [],
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
        deleteShport(shid){
            if(window.confirm('Are you sure you want to delete this Finance?')){
                fetch("http://localhost:5000/api/Shporta/"+shid,{
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
                <div className="box" key={this.props.id}>
                    <p>{this.props.sasia}</p>
                    <p>{this.props.libri}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditShport
                        isEditModalOpen={this.state.isEditModalOpen}
                        shid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteShport(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}