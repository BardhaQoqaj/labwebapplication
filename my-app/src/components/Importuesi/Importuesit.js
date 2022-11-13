import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddImportues } from './AddImportues'
import { Importuesi } from './Importuesi'

export class Importuesit extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            importuesi : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Importuesi")
        .then(response=>response.json())
        .then(data=>{
            this.setState({importuesi:data});
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
        const {importuesi,iid,iEmri,iSasia}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {importuesi.map(i =>
                <Importuesi key={i.id}  
                id={i.id} 
                Emri={i.Emri} 
                Sasia={i.Sasia} 
                >
                </Importuesi>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Importues </Button>
                  {this.state.isModalOpen ? 
                  <AddImportues onClose={this.toggleUserModal}
                  iid={iid}
                  iEmri={iEmri}
                  iSasia={iSasia}
                  />
                  :''}
                

        </div> 
        
    </div>
    </div>
    )
}
}