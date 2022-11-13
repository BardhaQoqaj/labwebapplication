import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditImportues } from './EditImportues';

export class Importuesi extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            Emri : [],
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
        deleteImportues(id){
            if(window.confirm('Are you sure you want to delete this Importues?')){
                fetch("http://localhost:5000/api/Importuesi/"+id,{
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
                    <p>{this.props.Sasia}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit Importues
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditImportues
                        isEditModalOpen={this.state.isEditModalOpen}
                        id={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteImportues(this.props.id)}>
                                Delete Importues
                        </button>
                </div>
            </div>
        )
}
}