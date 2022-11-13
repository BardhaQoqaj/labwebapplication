import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddPages } from './AddPages'
import { Pagesa } from './Pagesa'

export class Pagesat extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            pagesa : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Pagesa")
        .then(response=>response.json())
        .then(data=>{
            this.setState({pagesa:data});
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
        const {pagesa,paid,paCmimi,paZbritja}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {pagesa.map(pa =>
                <Pagesa key={pa.id}  
                id={pa.id} 
                Cmimi={pa.Cmimi} 
                Zbritja={pa.Zbritja} 
                >
                </Pagesa>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Payment </Button>
                  {this.state.isModalOpen ? 
                  <AddPages onClose={this.toggleUserModal}
                  paid={paid}
                  paCmimi={paCmimi}
                  paZbritja={paZbritja}
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}