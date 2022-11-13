import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditPorosi } from './EditPorosi';

export class Porosia extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            Lexuesi : [],
            Libri : [],
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
        deletePorosi(pid){
            if(window.confirm('Are you sure you want to delete this Order?')){
                fetch("http://localhost:5000/api/Porosia/"+pid,{
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
                    <p>{this.props.Lexuesi}</p>
                    <p>{this.props.Libri}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditPorosi
                        isEditModalOpen={this.state.isEditModalOpen}
                        pid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deletePorosi(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}