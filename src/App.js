import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from "./components/Navbar";
import Header from './components/Header';

import Particles from 'react-particles-js';
import Services from './components/Services';
import References from './components/References';

import Experience from './components/Experience';
import About from'./components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Particles
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              width:6,
              color:"#213159"
            }
          }
        }
      }}/>
    <Navbar/>
    <Header/>
    <Services/>
    <Experience/>
    <About/>
    <References/>
    <Footer/>
    </div>
  );
}

export default App;
