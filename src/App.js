import React, { useEffect, useState } from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal'

const App = () => {
  const [images, setImages] = useState();
  const [show, setShow] = useState(false)

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
    <>
      <h1 className="fw-light text-center text-lg-start mt-4 mb-0">Gallery</h1>
      <div className='modal-button'>
        <button type="button" class="btn btn-light" onClick={()=>{setShow(true)}}>Open Form</button>
      </div>
      <Modal show={show} onClose = {() => {setShow(false)}}/>
      <ImageGrid images={images}/>
    </>
  );
}

export default App;
