import React, { useState, useEffect } from 'react';
import axios from 'axios'
import DisplayMusic from './Components/DisplayMusic';


function App() {
  
  
  const [songs, setSongs] = useState([])

  
  useEffect(() => {
    getAllSongs();
    console.log('useEffect')
  }, [])
  
  
  async function getAllSongs(){
    let response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
  }
  
  
  async function createSong(newSong){
    let response = await axios.post('http://127.0.0.1:8000/api/music/', newSong);
    if(response.status === 201){
      await getAllSongs();
    }
  }
  
  
  function filterSongs(searchTerm){
   let filterResult = songs.filter()
    // artist == searchTerm OR title == searchTerm  
    // AFTER MVP: More sophisticated - change EQ to Contains
  }
  
  
  return (
    <div >
      {/* <SearchBar filterSongs={filterSongs} /> */}
     <DisplayMusic songs={songs} />
    </div>
  );
}

export default App;
