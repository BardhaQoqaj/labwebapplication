import React,{Component} from 'react';
import {variables} from './variables.js';

export class Libri extends Component{

    constructor(props){
        super(props);

        this.state={
            categories:[],
            books:[],
            modalTitle:"",
            Libri_ID:0,
            Titulli:"",
            EmriKategorise:"",
            Viti:"",
            photolibri:"anonymous.png",
            PhotoPath:variables.PHOTO_URL,
            PershkrimiLibrit:"",
            Faqet:"",
            Disponueshmeria:""


        }
    }

    refreshList(){

        fetch(variables.API_URL+'libri')
        .then(response=>response.json())
        .then(data=>{
            this.setState({books:data});
        });

        fetch(variables.API_URL+'kategoria')
        .then(response=>response.json())
        .then(data=>{
            this.setState({categories:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }
    
    changeTitulli =(e)=>{
        this.setState({Titulli:e.target.value});
    }
    changeEmriKategorise =(e)=>{
        this.setState({EmriKategorise:e.target.value});
    }
    changeViti =(e)=>{
        this.setState({Viti:e.target.value});
    }

    addClick(){
        this.setState({
            modalTitle:"Add Books",
            Libri_ID:0,
            Titulli:"",
            EmriKategorise:"",
            Viti:"",
            photolibri:"anonymous.png",
            PershkrimiLibrit:"",
            Faqet:"",
            Disponueshmeria:""
        });
    }
    editClick(lib){
        this.setState({
            modalTitle:"Edit Books",
            Libri_ID:lib.Libri_ID,
            Titulli:lib.Titulli,
            EmriKategorise:lib.EmriKategorise,
            Viti:lib.Viti,
            photolibri:lib.photolibri,
            PershkrimiLibrit:lib.PershkrimiLibrit,
            Faqet:lib.Faqet,
            Disponueshmeria:lib.Disponueshmeria
        });
    }

    createClick(){
        fetch(variables.API_URL+'Libri',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Titulli:this.state.Titulli,
                EmriKategorise:this.state.EmriKategorise,
                Viti:this.state.Viti,
                photolibri:this.state.photolibri,
                PershkrimiLibrit:this.state.PershkrimiLibrit,
                Faqet:this.state.Faqet,
                Disponueshmeria:this.state.Disponueshmeria
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
        fetch(variables.API_URL+'libri',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Libri_ID:this.state.Libri_ID,
                Titulli:this.state.Titulli,
                EmriKategorise:this.state.EmriKategorise,
                Viti:this.state.Viti,
                photolibri:this.state.photolibri,
                PershkrimiLibrit:this.state.PershkrimiLibrit,
                Faqet:this.state.Faqet,
                Disponueshmeria:this.state.Disponueshmeria
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
        if(window.confirm('Are you sure?')){
        fetch(variables.API_URL+'libri/'+id,{
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

    imageUpload=(e)=>{
        e.preventDefault();

        const formData=new FormData();
        formData.append("file",e.target.files[0],e.target.files[0].name);

        fetch(variables.API_URL+'libri/SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{
            this.setState({photolibri:data});
        })
    }

    render(){
        const {
            categories,
            books,
            modalTitle,
            Libri_ID,
            Titulli,
            EmriKategorise,
            Viti,
            PhotoPath,
            photolibri,
            PershkrimiLibrit,
            Faqet,
            Disponueshmeria
        }=this.state;

        return(
<div>

    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Add Book
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            Libri_ID
        </th>
        <th>
            Titulli
        </th>
        <th>
            EmriKategorise
        </th>
        <th>
            Viti
        </th>
        <th>
            PershkrimiLibrit
        </th>
        <th>
            Faqet
        </th>
        <th>
            Disponueshmeria
        </th>
        <th>
            Options
        </th>
    </tr>
    </thead>
    <tbody>
        {books.map(lib=>
            <tr key={lib.Libri_ID}>
                <td>{lib.Libri_ID}</td>
                <td>{lib.Titulli}</td>
                <td>{lib.EmriKategorise}</td>
                <td>{lib.Viti}</td>
                <td>{lib.PershkrimiLibrit}</td>
                <td>{lib.Faqet}</td>
                <td>{lib.Disponueshmeria}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={()=>this.editClick(lib)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                    </svg>
                </button>

                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(lib.Libri_ID)}>
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
    <div className="d-flex flex-row bd-highlight mb-3">
     
     <div className="p-2 w-50 bd-highlight">
    
        <div className="input-group mb-3">
            <span className="input-group-text">Titulli</span>
            <input type="text" className="form-control"
            value={Titulli}
            onChange={this.changeTitulli}/>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">EmriKategorise</span>
            <select className="form-select"
            onChange={this.changeEmriKategorise}
            value={EmriKategorise}>
                {categories.map(kat=><option key={kat.Kategoria_ID}>
                    {kat.EmriKategorise}
                </option>)}
            </select>
        </div>

        <div className="input-group mb-3">
            <span className="input-group-text">Viti</span>
            <input type="date" className="form-control"
            value={Viti}
            onChange={this.changeViti}/>
        </div>


     </div>
     <div className="p-2 w-50 bd-highlight">
         <img width="250px" height="250px"
         src={PhotoPath+photolibri}/>
         <input className="m-2" type="file" onChange={this.imageUpload}/>
     </div>
    </div>
    
    <div className="input-group mb-3">
            <span className="input-group-text">PershkrimiLibrit</span>
            <input type="text" className="form-control"
            value={PershkrimiLibrit}
            onChange={this.changePershkrimiLibrit}/>
        </div>

        
        <div className="input-group mb-3">
            <span className="input-group-text">Faqet</span>
            <input type="text" className="form-control"
            value={Faqet}
            onChange={this.changeFaqet}/>
        </div>

        
        <div className="input-group mb-3">
            <span className="input-group-text">Disponueshmeria</span>
            <input type="text" className="form-control"
            value={Disponueshmeria}
            onChange={this.changeDisponueshmeria}/>
        </div>

    {Libri_ID==0?
        <button type="button"
        className="btn btn-primary float-start"
        onClick={()=>this.createClick()}
        >Create</button>
        :null}

        {Libri_ID!=0?
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