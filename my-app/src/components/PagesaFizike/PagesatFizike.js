import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddPagesFizike } from './AddPagesFizike'
import { PagesaFizike } from './PagesaFizike'

export class PagesatFizike extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            pagesafizike : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/PagesaFizike")
        .then(response=>response.json())
        .then(data=>{
            this.setState({pagesafizike:data});
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
        const {pagesafizike,pfid,pfPiniIKarteles}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {pagesafizike.map(pf =>
                <PagesaFizike key={pf.id}  
                id={pf.id} 
                PiniIKarteles={pf.PiniIKarteles} 
                >
                </PagesaFizike>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Pagesa Fizike </Button>
                  {this.state.isModalOpen ? 
                  <AddPagesFizike onClose={this.toggleUserModal}
                  pfid={pfid}
                  pfPiniIKarteles={pfPiniIKarteles}
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}