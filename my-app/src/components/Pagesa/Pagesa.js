import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditPages } from './EditPages';

export class Pagesa extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            Cmimi : [],
            Zbritja : [],
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
        deletePages
        (paid){
            if(window.confirm('Are you sure you want to delete this Payment?')){
                fetch("http://localhost:5000/api/Pagesa/"+paid,{
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
                    <p>{this.props.Cmimi}</p>
                    <p>{this.props.Zbritja}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditPages
                        isEditModalOpen={this.state.isEditModalOpen}
                        paid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deletePages(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}