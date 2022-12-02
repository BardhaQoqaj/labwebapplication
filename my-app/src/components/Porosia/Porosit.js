import React, {Component} from 'react'
import { CategoryContainer, CategoryWrapper
} from './CategoryElements'
import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddPorosi } from './AddPorosi'
import { Porosia } from './Porosia'

export class Porosit extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            porosia : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Porosia")
        .then(response=>response.json())
        .then(data=>{
            this.setState({porosia:data});
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
        const {porosia,pid,pLexuesi,pLibri}=this.state;

    return (
    <div>
    <CategoryContainer id="states">
        <CategoryWrapper>

            {porosia.map(p =>
                <Porosia key={p.id}  
                id={p.id} 
                Lexuesi={p.Lexuesi} 
                Libri={p.Libri} 
                >
                </Porosia>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:'100px'}}> Add Order </Button>
                  {this.state.isModalOpen ? 
                  <AddPorosi onClose={this.toggleUserModal}
                  pid={pid}
                  pLibri={pLibri}
                  pLexuesi={pLexuesi}
                  />
                  :''}
                
                </CategoryWrapper> 
        
        </CategoryContainer>
    </div>
    )
}
}