import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

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
    <div id="states">
        <div>

            {pagesaonline.map(pao =>
                <PagesaOnline key={pao.id}  
                id={pao.id} 
                NrKarteles={pao.NrKarteles} 
                >
                </PagesaOnline>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Pages Online </Button>
                  {this.state.isModalOpen ? 
                  <AddPagesOnline onClose={this.toggleUserModal}
                  paoid={paoid}
                  paoNrKarteles={paoNrKarteles}
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}