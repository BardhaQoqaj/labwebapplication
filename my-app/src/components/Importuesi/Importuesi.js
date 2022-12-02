import React, {Component} from 'react'
 import { ImportuesiContainer, ImportuesH1, ImportuesH2,
         ImportuesE, ImportuesCard, ImportuesiWrapper,
         ImportuesS, ImportuesiIdP } from './ImportuesiElements'

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
            <div>
                <ImportuesCard>
                <ImportuesiIdP key={this.props.id}/>
                    <ImportuesE>Emri: {this.props.Emri}</ImportuesE>
                    <ImportuesS>Sasia e importuar: {this.props.Sasia}</ImportuesS>
                    
                    
                     <ButtonToolbar>
                        <Button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit Importues
                        </Button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditImportues
                        isEditModalOpen={this.state.isEditModalOpen}
                        id={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteImportues(this.props.id)}>
                                Delete Importues
                        </Button>
                        </ButtonToolbar>
                    </ImportuesCard>
                </div>
           
        )
}
}