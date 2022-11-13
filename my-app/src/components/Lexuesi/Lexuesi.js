import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditLexues } from './EditLexues';

export class Lexuesi extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            emri : [],
            mbiemri : [],
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
        deleteLexues(lid){
            if(window.confirm('Are you sure you want to delete this Reader?')){
                fetch("http://localhost:5000/api/Lexuesi/"+lid,{
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
                    <p>{this.props.emri}</p>
                    <p>{this.props.mbiemri}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditLexues
                        isEditModalOpen={this.state.isEditModalOpen}
                        lid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteLexues(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}