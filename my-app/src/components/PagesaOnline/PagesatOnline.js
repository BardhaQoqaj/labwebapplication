import React, {Component} from 'react'
import { CategoryContainer, CategoryWrapper} from './CategoryElements'
import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddPagesOnline } from './AddPagesOnline'
import { PagesaOnline } from './PagesaOnline'

export class PagesatOnline extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            pagesaonline : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/PagesaOnline")
        .then(response=>response.json())
        .then(data=>{
            this.setState({pagesaonline:data});
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
        const {pagesaonline,paoid,paoNrKarteles}=this.state;

    return (
    <div>
    <CategoryContainer id="states">
        <CategoryWrapper>

            {pagesaonline.map(pao =>
                <PagesaOnline key={pao.id}  
                id={pao.id} 
                NrKarteles={pao.NrKarteles} 
                >
                </PagesaOnline>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:'140px'}}> Add Pages Online </Button>
                  {this.state.isModalOpen ? 
                  <AddPagesOnline onClose={this.toggleUserModal}
                  paoid={paoid}
                  paoNrKarteles={paoNrKarteles}
                  />
                  :''}
       </CategoryWrapper> 
        
        </CategoryContainer>
                
    </div>
    )
}
}