import React from 'react'
import {BrowserRouter,Routes,Route}from 'react-router-dom'
import './App.css';
import Train2 from './Train2';
import Train1 from './Train1';
function App() {
  return (
   <div className="App">
<BrowserRouter>
<Routes>
  <Route path='/' element={<Train2></Train2>}></Route>
  <Route path='/:train_no' element={<Train1></Train1>}></Route>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;