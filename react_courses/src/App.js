import Navbar from './components/Navbar';
import Card from "./components/Card";
import './App.css';

const photos=[
  'https://picsum.photos/id/1001/200/200',
  'https://picsum.photos/id/1002/200/200',
  'https://picsum.photos/id/1003/200/200',
  'https://picsum.photos/id/1004/200/200',
  'https://picsum.photos/id/1005/200/200',
  'https://picsum.photos/id/1006/200/200',
  'https://picsum.photos/id/1009/200/200',
  'https://picsum.photos/id/1008/200/200',
]

function App() {
  return (
    <>
      <Navbar />
      <div class="container text-center mt-5">
        <h1>Gallery</h1>
        <div className='row'>
          {/* {Array.apply(null,{length: 9}).map(()=> <Card />)} */}
          {photos.map((photo)=> <Card src={photo}/>)}
        </div>
      </div>
    </>
  );
}
export default App;