import React, {Component} from 'react'
import { CategoryContainer, CategoryWrapper} from './CategoryElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddTransport } from './AddTransport'
import { Transporti } from './Transporti'

export class Transportet extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            transporti : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Transporti")
        .then(response=>response.json())
        .then(data=>{
            this.setState({transporti:data});
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
        const {transporti,tid,tSasia,tlloji}=this.state;

    return (
    <div>
     <CategoryContainer id="states">
        <CategoryWrapper>

            {transporti.map(t =>
                <Transporti key={t.id}  
                id={t.id} 
                Sasia={t.Sasia}
                lloji={t.lloji} 
                >
                </Transporti>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:'130px'}}> Add Transport </Button>
                  {this.state.isModalOpen ? 
                  <AddTransport onClose={this.toggleUserModal}
                  tid={tid}
                  tlloji={tlloji}
                  tSasia={tSasia}
                  />
                  :''}
         </CategoryWrapper> 
        
        </CategoryContainer>
    </div>
    )
}
}