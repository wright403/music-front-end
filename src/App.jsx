import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayMusic from "./Components/DisplayMusic";
import SearchBar from "./Components/SearchBar";

function App() {
  const [userInput, setUserInput] = useState("");
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getAllSongs();
    console.log("useEffect");
  }, []);

  async function getAllSongs() {
    let response = await axios.get("http://127.0.0.1:8000/api/music/");
    setSongs(response.data);
  }

  async function createSong(newSong) {
    let response = await axios.post(
      "http://127.0.0.1:8000/api/music/",
      newSong
    );
    if (response.status === 201) {
      await getAllSongs();
    }
  }

  
    // artist == searchTerm OR title == searchTerm
    // AFTER MVP: More sophisticated - change EQ to Contains
  
  const getUserInput = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <SearchBar getUserInput={getUserInput} userInput={userInput} />
      <DisplayMusic songs={songs} userInput={userInput} />
    </div>
  );
}

export default App;
