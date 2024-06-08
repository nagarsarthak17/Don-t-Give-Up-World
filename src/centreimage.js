import React, { useState, useEffect } from 'react';
import './centreimage.css'
import Like from './like';
import Dislike from './dislike';

export default function CentreImage(props) {
  useEffect (
    ()=> {
      console.log("ActiveFilter", props.activeFilter)
    },
    [props.activeFilter]
  )
  const [moodPhotos, setMoodPhotos] = useState([
    'images/happy/h1.jpeg',
    'images/happy/h2.jpeg',
    'images/happy/h3.jpeg',
    'images/happy/h4.jpeg',
    'images/sad/6.jpeg',
    'images/sad/7.jpeg',
    'images/angry/1.jpeg',
    'images/angry/2.jpeg',
    'images/angry/4.jpeg',
    'images/angry/5.jpeg'
  ]);
  const [moodType, setMoodType] = useState(props.activeFilter);
  const [currPhotoIndex, setCurrPhotoIndex] = useState( Math.floor(Math.random() * moodPhotos.length))
 
  useEffect(() => {
    handleCardClick(props.activeFilter)
    // Update the current photo index whenever the moodPhotos state change
    // console.log("moodPhotos", moodPhotos, "moodType", moodType)
    // console.log(moodPhotos.length)
    // console.log(currPhotoIndex)
    setCurrPhotoIndex(Math.floor(Math.random() * moodPhotos.length));
  }, [props.activeFilter]);

  function showRandomPhoto() {
    setCurrPhotoIndex(  Math.floor(Math.random() * moodPhotos.length))
  }

  function handleCardClick(type) {
    console.log("type", type)
    if(type == "happy") {
      var photos = [
        'images/happy/h1.jpeg',
        'images/happy/h2.jpeg',
        'images/happy/h3.jpeg',
        'images/happy/h4.jpeg'
      ]
    }
    else if(type == "sad") {
      var photos = [
        'images/sad/6.jpeg',
        'images/sad/7.jpeg'
      ]
    }
    else if(type == "angry") {
      var photos = [
        'images/angry/1.jpeg',
        'images/angry/2.jpeg',
        'images/angry/4.jpeg',
        'images/angry/5.jpeg'
      ]
    }
    else {
      var photos = [
        'images/happy/h1.jpeg',
    'images/happy/h2.jpeg',
    'images/happy/h3.jpeg',
    'images/happy/h4.jpeg',
    'images/sad/6.jpeg',
    'images/sad/7.jpeg',
    'images/angry/1.jpeg',
    'images/angry/2.jpeg',
    'images/angry/4.jpeg',
    'images/angry/5.jpeg'
      ]
    }
    console.log("moodPhotos", moodPhotos, "moodType", moodType)
    setMoodType(type)
    setMoodPhotos(photos)
  }
  return (
    <div className='centreimage'>
      <Dislike></Dislike>
      <img src={moodPhotos[currPhotoIndex]}>
      </img>
      <Like></Like>
    </div>
  )
}
