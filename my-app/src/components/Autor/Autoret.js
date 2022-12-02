import React, {Component} from 'react'
import { CategoryContainer, CategoryWrapper,
} from './CategoryElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddAutor } from './AddAutor'
import { Autor } from './Autor'

export class Autoret extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            autor : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Autor")
        .then(response=>response.json())
        .then(data=>{
            this.setState({autor:data});
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
        const {autor,auId,auname,aulibri}=this.state;

    return (
    <div>
    <CategoryContainer id="states">
        <CategoryWrapper>

            {autor.map(au =>
                <Autor key={au.Id}  
                Id={au.Id} 
                name={au.name} 
                libri={au.libri}
                >
                </Autor>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:'100px'}}> Add Author </Button>
                  {this.state.isModalOpen ? 
                  <AddAutor onClose={this.toggleUserModal}
                  auId={auId}
                  auname={auname}
                  aulibri={aulibri}
                  />
                  :''}
                
                </CategoryWrapper> 
        
        </CategoryContainer>
    </div>
    )
}
}