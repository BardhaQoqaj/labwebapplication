import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditPagesFizike } from './EditPagesFizike';

export class PagesaFizike extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            PiniIKarteles : [],
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
        deletePagesFizike(pfid){
            if(window.confirm('Are you sure you want to delete this Pages Fizike?')){
                fetch("http://localhost:5000/api/PagesaFizike/"+pfid,{
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
                    <p>{this.props.PiniIKarteles}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditPagesFizike
                        isEditModalOpen={this.state.isEditModalOpen}
                        pfid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deletePagesFizike(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}