import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Photo from "./Photo";
import PhotoTitle from "./PhotoTitle";
import AboutPhoto from "./AboutPhoto";

function App() {
  const [ photo, setPhoto ] = useState(null);

  useEffect(() => {
    const fetchPhoto = () => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=Qlx1Zgu4stfcqdY9Wl8Z0qcgdDiRJvYdDUSbuUAG`)
      .then(resp => {
        setPhoto(resp.data)
        console.log(resp.data);
      })
      .catch(error => {
        console.error(error);
      })
    }
    fetchPhoto();
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo Of The Day</h1>
      {
        photo && <PhotoTitle photo={photo}/>
      }
      {
        photo && <Photo photo={photo}/>
      }
      {
        photo && <AboutPhoto photo={photo}/>
      }
    </div>
  );
}

export default App;
