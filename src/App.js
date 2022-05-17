import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';

const App = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <ImageGrid images={images}/>
  );
}

export default App;
