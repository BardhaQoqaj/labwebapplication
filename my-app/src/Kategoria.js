import React,{Component} from 'react';
import {variables} from './variables.js';

export class Kategoria extends Component{

    constructor(props){
        super(props);

        this.state={
            categories:[],
            modalTitle:"",
            EmriKategorise:"",
            Kategoria_ID:0,

            Kategoria_IDFilter:"",
            EmriKategoriseFilter:"",
            categoriesWithoutFilter:[]
        }
    }

    FilterFn(){
        var Kategoria_IDFilter=this.state.Kategoria_IDFilter;
        var EmriKategoriseFilter = this.state.EmriKategoriseFilter;

        var filteredData=this.state.categoriesWithoutFilter.filter(
            function(el){
                return el.Kategoria_ID.toString().toLowerCase().includes(
                    Kategoria_IDFilter.toString().trim().toLowerCase()
                )&&
                el.EmriKategorise.toString().toLowerCase().includes(
                    EmriKategoriseFilter.toString().trim().toLowerCase()
                )
            }
        );

        this.setState({categories:filteredData});

    }
    changeKategoria_IDFilter = (e)=>{
        this.state.Kategoria_IDFilter=e.target.value;
        this.FilterFn();
    }
    changeEmriKategoriseFilter = (e)=>{
        this.state.EmriKategoriseFilter=e.target.value;
        this.FilterFn();
    }

    refreshList(){
        fetch(variables.API_URL+'kategoria')
        .then(response=>response.json())
        .then(data=>{
            this.setState({categories:data,categoriesWithoutFilter:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeEmriKategorise =(e)=>{
        this.setState({EmriKategorise:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Category",
            Kategoria_ID:0,
            EmriKategorise:""
        });
    }
    editClick(kat){
        this.setState({
            modalTitle:"Edit Category",
            Kategoria_ID:kat.Kategoria_ID,
            EmriKategorise:kat.EmriKategorise
        });
    }

    createClick(){
        fetch(variables.API_URL+'kategoria',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                EmriKategorise:this.state.EmriKategorise
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }


    updateClick(){
        fetch(variables.API_URL+'kategoria',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Kategoria_ID:this.state.Kategoria_ID,
                EmriKategorise:this.state.EmriKategorise
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    deleteClick(id){
        if(window.confirm('Are you sure you want to delete?')){
        fetch(variables.API_URL+'kategoria/'+id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
        }
    }

    render(){
        const {
            categories,
            modalTitle,
            Kategoria_ID,
            EmriKategorise
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Category
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            <div className="d-flex flex-row">

            
            <input className="form-control m-2"
            onChange={this.changeKategoria_IDFilter}
            placeholder="Filter"/>
            
          

            </div>
            Kategoria_ID
        </th>
        <th>
        <div className="d-flex flex-row">
        <input className="form-control m-2"
            onChange={this.changeEmriKategoriseFilter}
            placeholder="Filter"/>

            
            </div>
            EmriKategorise
      
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {categories.map(kat=>
            <tr key={kat.Kategoria_ID}>
                <td>{kat.Kategoria_ID}</td>
                <td>{kat.EmriKategorise}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(kat)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(kat.Kategoria_ID)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>

                </td>
            </tr>
            )}
    </tbody>
    </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
<div className="modal-dialog modal-lg modal-dialog-centered">
<div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">{modalTitle}</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
       <div className="input-group mb-3">
        <span className="input-group-text">EmriKategorise</span>
        <input type="text" className="form-control"
        value={EmriKategorise}
        onChange={this.changeEmriKategorise}/>
       </div>

        {Kategoria_ID==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {Kategoria_ID!=0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.updateClick()}
        >Update</button>
        :null}

   </div>

</div>
</div> 
</div>


</div>
        )
    }
}