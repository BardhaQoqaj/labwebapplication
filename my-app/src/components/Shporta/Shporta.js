import React, {Component} from 'react'
import { ImportuesiContainer, ImportuesH1, ImportuesH2,
    ImportuesE, ImportuesCard, ImportuesiWrapper,
    ImportuesS, ImportuesiIdP } from './ImportuesiElements'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditShport } from './EditShport';

export class Shporta extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            id : [],
            sasia : [],
            libri : [],
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
        deleteShport(shid){
            if(window.confirm('Are you sure you want to delete this Finance?')){
                fetch("http://localhost:5000/api/Shporta/"+shid,{
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
                    <ImportuesE>Sasia qe deshironi:{this.props.sasia}</ImportuesE>
                    <ImportuesS>Titulli i Librit:{this.props.libri}</ImportuesS>

                    <ButtonToolbar>
                        <Button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </Button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditShport
                        isEditModalOpen={this.state.isEditModalOpen}
                        shid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteShport(this.props.id)}>
                                Delete
                        </Button>
                        </ButtonToolbar>
                    </ImportuesCard>
            </div>
        )
}
}