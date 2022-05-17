import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';

const App = () => {
  const [images, setImages] = useState();

  // receive response from API and set images state to that data
  // measure time taken to receive API data and log to console as 'timer1'
  useEffect(() => {
    console.time('timer1')
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.timeEnd("timer1");
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

    // measure  time taken to receive API data using faster endpoint /load-images-faster for comparison 'timer2'
    useEffect(() => {
      console.time('timer2')
      fetch('load-images-faster?limit=10')
        .then(res => {res.json();
          console.timeEnd("timer2");})
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);

  return (
    <ImageGrid images={images}/>
  );
}

export default App;
