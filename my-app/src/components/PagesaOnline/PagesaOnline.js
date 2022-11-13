import React, {Component} from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditPagesOnline } from './EditPagesOnline';

export class PagesaOnline extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            NrKarteles : [],
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
        deletePagesOnline(paoid){
            if(window.confirm('Are you sure you want to delete this Pages Online?')){
                fetch("http://localhost:5000/api/financa/"+paoid,{
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
                    <p>{this.props.NrKarteles}</p>

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditPagesOnline
                        isEditModalOpen={this.state.isEditModalOpen}
                        paoid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deletePagesOnline(this.props.id)}>
                                Delete
                        </button>
                </div>
            </div>
        )
}
}