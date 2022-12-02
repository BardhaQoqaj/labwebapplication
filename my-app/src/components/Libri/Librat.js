import React, {Component} from 'react'
 import { LibriContainer, LibriH1,LibriWrapper,} from './LibriElements'

import { Button, ButtonToolbar } from 'react-bootstrap'


import { AddLiber } from './AddLiber'
import { Libri } from './Libri'

export class Librat extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            libri : [],
            isModalOpen : false,
            isEditModalOpen : false
        };
    }

    //Fetching db data
    refreshList(){
        fetch("http://localhost:5000/api/Libri")
        .then(response=>response.json())
        .then(data=>{
            this.setState({libri:data});
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
        const {libri,libLibri_ID,libTitulli,libFaqet,libDisponueshmeria,libViti,libPershkrimiLibrit,libEmriKategorise,file}=this.state;

    return (
    <div>
        <LibriContainer id="librat">
            <LibriH1>Popular Books in the liking of Readers</LibriH1>
    <LibriWrapper>
            {libri.map(lib =>
                <Libri key={lib.Libri_ID}  
                Libri_IDd={lib.Libri_ID} 
                Titulli={lib.Titulli} 
                Faqet={lib.Faqet} 
                Disponueshmeria={lib.Disponueshmeria} 
                Viti={lib.Viti} 
                PershkrimiLibrit={lib.PershkrimiLibrit} 
                EmriKategorise={lib.EmriKategorise} 
 
                >
                </Libri>
            )} 

             <Button onClick={this.toggleUserModal} variant='primary' className='add-a-state'> Add Book </Button>
                  {this.state.isModalOpen ? 
                  <AddLiber onClose={this.toggleUserModal}
                  libLibri_ID={libLibri_ID}
                  libTitulli={libTitulli}
                  libFaqet={libFaqet}
                  libDisponueshmeria={libDisponueshmeria}
                  libViti={libViti}
                  libPershkrimiLibrit={libPershkrimiLibrit}
                  libEmriKategorise={libEmriKategorise}
                  file={file}
                  />
                  :''}
                </LibriWrapper>
            </LibriContainer>
        </div> 
        

    
    )
}
}