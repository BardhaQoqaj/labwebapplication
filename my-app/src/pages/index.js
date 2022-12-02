import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Autoret } from '../components/Autor/Autoret'
import { Importuesit } from '../components/Importuesi/Importuesit'
import { Kategorit } from '../components/Kategoria/Kategorit'
import { Lexuesit } from '../components/Lexuesi/Lexuesit'
import HomePage from '../components/Home/HomePage'
import { Pagesat } from '../components/Pagesa/Pagesat'
import { PagesatFizike } from '../components/PagesaFizike/PagesatFizike'
import { PagesatOnline } from '../components/PagesaOnline/PagesatOnline'
import { Porosit } from '../components/Porosia/Porosit'
import { Postat } from '../components/Posta/Postat'
import { Shportat } from '../components/Shporta/Shportat'
// import {Drejtimet} from '../components/Drejtimet/Drejtimet'
import {ShtepitBotuese} from '../components/ShtepiaBotuese/ShtepitBotuese'
// import App  from '../components/About/App'
import {Transportet} from '../components/Transporti/Transportet'
import {Librat} from '../components/Libri/Librat'

const Home=()=> {
    const [isOpen, setIsOpen] = useState(false)
    
    const toggle = () => {
        setIsOpen(!isOpen)
    }
  
    return (
    <>
      <NavBar toggle={toggle}/>
      <HomePage/>
       <Autoret/> 
      <Importuesit/>
      <Kategorit/>
      <Lexuesit/>
      <Pagesat/>
      <PagesatFizike/>
      <PagesatOnline/>
      <Porosit/>
      <Postat/>
      <Shportat/>
      <ShtepitBotuese/>
      <Transportet/>
      <Librat/>
      {/* <App/> */}
      
      </>
    )
}
     
export default Home;