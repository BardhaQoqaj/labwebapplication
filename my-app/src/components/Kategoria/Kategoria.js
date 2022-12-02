  import React, {Component} from 'react'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditKategori } from './EditKategori';

export class Kategoria extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            Kategoria_ID : [],
            EmriKategorise : [],
    
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
        deleteKategori(katKategoria_ID){
            if(window.confirm('Are you sure you want to delete this Author?')){
                fetch("http://localhost:5000/api/Kategoria/"+katKategoria_ID,{
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
                <div className="box" key={this.props.katKategoria_ID}>
                    <p>{this.props.EmriKategorise}</p>
                   

                    
                        <button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditKategori
                        isEditModalOpen={this.state.isEditModalOpen}
                        katKategoria_ID={this.props.katKategoria_ID}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <button className="mr-2" variant="danger"
                            onClick={()=>this.deleteKategori(this.props.katKategoria_ID)}>
                                Delete Category
                        </button>
                </div>
            </div>
        )
}
}