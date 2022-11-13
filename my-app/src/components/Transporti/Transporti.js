import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditTransport} from './EditTransport';

export class Transporti extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            lloji : [],
            Sasia : [],
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
        deleteTransport(tid){
            if(window.confirm('Are you sure you want to delete this Transport?')){
                fetch("http://localhost:5000/api/Transporti/"+tid,{
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
                    <p>{this.props.lloji}</p>
                    <p>{this.props.Sasia}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditTransport
                        isEditModalOpen={this.state.isEditModalOpen}
                        tid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteTransport(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}