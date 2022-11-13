import React, {Component} from 'react'
// import { StatesContainer, StateH1, StateH2,
//         StateIcon, StateP, StatesCard, StatesWrapper,
//         CityP, StateIdP, OptionsP } from './StateElements'

import { Button, ButtonToolbar } from 'react-bootstrap'

import { AddKategori } from './AddKategori'
import { Kategoria } from './Kategoria'

export class Kategorit extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            kategoria : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Kategoria")
        .then(response=>response.json())
        .then(data=>{
            this.setState({kategoria:data});
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
        const {kategoria,katKategoria_ID,katEmriKategorise}=this.state;

    return (
    <div>
    <div id="states">
        <div>

            {kategoria.map(kat =>
                <Kategoria key={kat.Kategoria_ID}  
                Kategoria_ID={kat.Kategoria_ID} 
                EmriKategorise={kat.EmriKategorise} 
                
                >
                </Kategoria>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Category </Button>
                  {this.state.isModalOpen ? 
                  <AddKategori onClose={this.toggleUserModal}
                  katKategoria_ID={katKategoria_ID}
                  katEmriKategorise={katEmriKategorise}
                  
                  />
                  :''}
                
        </div> 
        
    </div>
    </div>
    )
}
}