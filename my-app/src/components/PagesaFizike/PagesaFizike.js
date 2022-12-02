import React, {Component} from 'react'
import { ImportuesiContainer, ImportuesH1, ImportuesH2,
    ImportuesE, ImportuesCard, ImportuesiWrapper,
    ImportuesS, ImportuesiIdP } from './ImportuesiElements'

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
            <div>
                 <ImportuesCard>
                <ImportuesiIdP key={this.props.id}/>
                <ImportuesE>Pini juaj i karteles: {this.props.PiniIKarteles}</ImportuesE>

                <ButtonToolbar>
                        <Button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </Button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditPagesFizike
                        isEditModalOpen={this.state.isEditModalOpen}
                        pfid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deletePagesFizike(this.props.id)}>
                                Delete
                        </Button>
                        </ButtonToolbar>
                    </ImportuesCard>
                
            </div>
        )
}
}