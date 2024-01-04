import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from "./components/Card";
import UploadForm from "./components/UploadForm";
import './App.css';

const photos=[
  'https://picsum.photos/id/1001/200/200',
]

function App() {
  const [count, setCount]=useState();
  const [inputs, setInput]=useState({title:null, file:null, path:null});
  const [items, setItems]=useState(photos);
  const [isCollapsed, collapse]= useState(false);

  const toggle=()=> collapse(!isCollapsed);
  const handleOnChange=(e)=>{
    if(e.target.name === 'file'){
      setInput({...inputs, file: e.target.files[0], path:URL.createObjectURL(e.target.files[0])},);
    }else{
      setInput({...inputs,title:e.target.value});
    }
  }
 
  const handleOnSubmit=(e)=>{
    e.preventDefault();
    setItems([inputs.path, ...items]);
  }
  useEffect(()=>{
    setCount(`You have ${items.length} image${items.length > 1 ? 's' : " " }`)
  },[items]);

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
        {count}
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