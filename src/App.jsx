import React from 'react';
import './App.css';
import MoreInformation from './MoreInformation';
import FetchFromApi from './fetchFromApi';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Navbar';
const App = () =>{
  return(
    <>
    <Navbar/>
    <BrowserRouter>
 
    <Routes>
  
    <Route path ="/" element = {<FetchFromApi/>}/>
    <Route path = "moreinformation" element = {<MoreInformation/>}/>
  
    </Routes>
    </BrowserRouter>
    </>
  );
};


export default App;
