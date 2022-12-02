import React, {Component} from 'react'
 import { LexContainer, LexH2,
     LexPP, LexCard, LexWrapper,
        LexIdP} from './LexElements'

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
            <div>
                <LexCard>
                <LexIdP key={this.props.id}/>
                    <LexH2 className='lex-name'>{this.props.emri}</LexH2>
                    <LexPP>{this.props.mbiemri}</LexPP>

                    
                    <ButtonToolbar>
                        <Button className="mr-1" variant="info"
                            onClick={this.toggleUserEditModal}>
                            Edit
                        </Button> 
                        
                        {this.state.isEditModalOpen ?
                        <EditLexues
                        isEditModalOpen={this.state.isEditModalOpen}
                        lid={this.props.id}
                        onClose={this.toggleUserEditModal}
                        /> 
                        :''}

                        <Button className="mr-2" variant="danger"
                            onClick={()=>this.deleteLexues(this.props.id)}>
                                Delete
                        </Button>
                        </ButtonToolbar>
                        </LexCard>
                </div>
           
        )
}
}