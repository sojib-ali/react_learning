//type url and add photo

import { useState } from 'react';
import Navbar from './components/Navbar';
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";
import './App.css';

const photos=[
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
]

function App() {
  const [input, setInput]=useState();
  const [items, setItems]=useState(photos);
  const [isCollapsed, collapse]= useState(false);

  const toggle=()=> collapse(!isCollapsed);
  const handleOnChange=(e)=>setInput(e.target.value);
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    setItems([input, ...items]);
  }

  return (
    <>
      <Navbar />
      <div class="container text-center mt-5">
      {/* <button className="btn btn-warning" onClick={() => setItems(['https://picsum.photos/id/1008/200/200', ...items])}> +Add</button><br /> */}
        <button className='btn btn-success float-end' onClick={toggle} >{isCollapsed ? 'Close':'Add'}</button>
        <div className='clearfix mb-4'></div>
        <UploadForm 
        isVisible={isCollapsed}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        />
        <h1 className='clearfix mb-4'>Gallery</h1>
        <div className='row'>
          {/* {Array.apply(null,{length: 9}).map(()=> <Card />)} */}
          {items.map((photo)=> <Card src={photo}/>)}
        </div>
      </div>
    </>
  );
}
export default App;