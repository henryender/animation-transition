import * as React from 'react'
import './App.css';
import Test from './Tools/Test';
import SideBar from './Tools/SideBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Test />}/>
          <Route path='side-bar' element={<SideBar />}/> 
          {/* <Route path='/next' element={Practice}/> */}

        </Routes>

      </BrowserRouter>

    </>

  );
}

export default App;
