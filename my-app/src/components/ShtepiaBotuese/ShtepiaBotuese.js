import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditShtepiBotuese } from './EditShtepiBotuese';

export class ShtepiaBotuese extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            Emri : [],
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
        deleteShtepiBotuese(shbid){
            if(window.confirm('Are you sure you want to delete this Shtepi Botuese?')){
                fetch("http://localhost:5000/api/ShtepiaBotuese/"+shbid,{
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
                    <p>{this.props.Emri}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditShtepiBotuese
                        isEditModalOpen={this.state.isEditModalOpen}
                        shid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteShtepiBotuese(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}