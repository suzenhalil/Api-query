
import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api';
import { useState } from 'react';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([])
  
  const handleSubmit= async (term) =>{
// console.log(term);
const results= await searchImages(term);
setImages(results);
  }
  return (
    <div className="App">
      <SearchHeader search = {handleSubmit}/> 
      <ImageList imagePlaceHolder={images}/>
    </div>
  );
}

export default App;
