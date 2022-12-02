import React, {Component} from 'react'
import { ImportuesiContainer, ImportuesH1, ImportuesiWrapper} from './ImportuesiElements'


import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddShport } from './AddShport'
import { Shporta } from './Shporta'

export class Shportat extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            shporta : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Shporta")
        .then(response=>response.json())
        .then(data=>{
            this.setState({shporta:data});
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
        const {shporta,shid,shsasia,shlibri}=this.state;

    return (
    <div>
     <ImportuesiContainer id="importuesit">
      <ImportuesH1>Put your favorite books in the wish cart</ImportuesH1>
        <ImportuesiWrapper>

            {shporta.map(sh =>
                <Shporta key={sh.id}  
                FididId={sh.id} 
                sasia={sh.sasia} 
                libri={sh.libri} 
                >
                </Shporta>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state' style={{width:'100px'}}> Add  Cart </Button>
                  {this.state.isModalOpen ? 
                  <AddShport onClose={this.toggleUserModal}
                  shid={shid}
                  shsasia={shsasia}
                  shlibri={shlibri}
                  />
                  :''}
                
                </ImportuesiWrapper>
            </ImportuesiContainer>
    </div>
    )
}
}