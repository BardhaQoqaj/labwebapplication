import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddPost } from './AddPost'
import { Posta } from './Posta'

export class Postat extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            posta : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Posta")
        .then(response=>response.json())
        .then(data=>{
            this.setState({posta:data});
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
        const {posta,poid,poEmri}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {posta.map(po =>
                <Posta key={po.id}  
                id={po.id} 
                poEmri={po.Emri} 
                >
                </Posta>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Post </Button>
                  {this.state.isModalOpen ? 
                  <AddPost onClose={this.toggleUserModal}
                  poid={poid}
                  poEmri={poEmri}
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}