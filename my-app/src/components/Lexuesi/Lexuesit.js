import React, {Component} from 'react'
 import { LexContainer, LexWrapper,
         } from './LexElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddLexues } from './AddLexues'
import { Lexuesi } from './Lexuesi'

export class Lexuesit extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            lexuesi : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Lexuesi")
        .then(response=>response.json())
        .then(data=>{
            this.setState({lexuesi:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    // componentDidUpdate(){
    //     this.refreshList();
    // }
    
    toggleUserModal = ()=>{
        this.setState((state)=>{
            return{
                isModalOpen: !state.isModalOpen
            }
        })
    }

    render(){
        const {lexuesi,lid,lemri,lmbiemri}=this.state;

    return (
    <div>

     <LexContainer id="lex">
    <h2 className='lexues'>Readers:</h2>
       
        <LexWrapper>

            {lexuesi.map(l =>
                <Lexuesi key={l.id}  
                id={l.id} 
                emri={l.emri} 
                mbiemri={l.mbiemri} 
                >
                </Lexuesi>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:'100px'}}> Add Reader </Button>
                  {this.state.isModalOpen ? 
                  <AddLexues onClose={this.toggleUserModal}
                  lid={lid}
                  lemri={lemri}
                  lmbiemri={lmbiemri}
                  />
                  :''}

                </LexWrapper>
        
        </LexContainer> 

        </div> 
        
   
    )
}
}