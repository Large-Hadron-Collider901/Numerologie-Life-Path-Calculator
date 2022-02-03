import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Profiles from "./components/Profiles"; 
import LifePaths from "./components/LifePaths";
import Nav from "./components/Nav";
import AboutNumerology from "./components/AboutNumerology";

function App() {

  return (
    <div className=" ">
      <Nav />
      <img src="https://i.ibb.co/kJ4Drst/pexels-pixabay-301673.jpg" width="60%" alt="pexels-pixabay-301673" border="0" className="object-cover absolute top-20 right-0 w-80% h-full dark:bg-coolGray-500 z-0"/>   
      <img src="https://i.ibb.co/4tfhN62/shutterstock-1787658104.jpg" height="99%" width="50%" alt="shutterstock-1787658104" border="0" className="h-full% dark:bg-coolGray-500 z-30 pr-40 z-30"/>
      <div>
        <Routes>
          <Route path="/LifePaths" component={LifePaths}/>
          <Route path="/Profiles" component={Profiles}/>
          <Route path="/Register" component={Register}/>
        </Routes>
        
      </div>
 
    <Home />
 

<img src="https://i.ibb.co/cQZVmK1/10.png" alt="10" width="160px" height="160px" className="z-20 ml-60 absolute bottom-4 mt-20 right-0"/><AboutNumerology />                                                                                                      
    </div>
  );
}

export default App;

