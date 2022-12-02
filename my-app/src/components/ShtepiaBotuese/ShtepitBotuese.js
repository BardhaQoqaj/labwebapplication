import React, {Component} from 'react'
import { CategoryContainer, CategoryWrapper
} from './CategoryElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddShtepiBotuese } from './AddShtepiBotuese'
import { ShtepiaBotuese } from './ShtepiaBotuese'

export class ShtepitBotuese extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            shtepiabotuese : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/ShtepiaBotuese")
        .then(response=>response.json())
        .then(data=>{
            this.setState({shtepiabotuese:data});
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
        const {shtepiabotuese,shbid,shbEmri}=this.state;

    return (
    <div>
    <CategoryContainer id="states">
        <CategoryWrapper>

            {shtepiabotuese.map(shb =>
                <ShtepiaBotuese key={shb.id}  
                id={shb.id} 
                Emri={shb.Emri} 
                >
                </ShtepiaBotuese>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:'180px'}}> Add Shtepi Botuese </Button>
                  {this.state.isModalOpen ? 
                  <AddShtepiBotuese onClose={this.toggleUserModal}
                  shbid={shbid}
                  shbEmri={shbEmri}
                  />
                  :''}
                
                </CategoryWrapper> 
        
        </CategoryContainer>
    </div>
    )
}
}