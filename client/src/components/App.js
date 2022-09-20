import Search from './Search';
import SongList from './SongList';

import { useState, useEffect } from 'react';

import exampleSongData from '../data/exampleSongData';

const player = new Audio();
player.volume = 0.0075;

const App = () => {
  const [songList, setSongList] = useState([...exampleSongData]);
  const [nowPlaying, setNowPlaying] = useState();
  const [query, setQuery] = useState('');

  const handleOnMouseEnter = function(song) {
    player.src = song.preview_url;
    player.play();
  };

  const handleOnMouseLeave = function(song) {
    player.src = '';
    player.pause();
  };

  const handleSetSongList = function(songList) {
    setSongList(songList);
  };

  const handleSetNowPlaying = function(songToPlay) {
    console.log(songToPlay);
    setNowPlaying(songToPlay);
  };

  return (
    <div>
      <Search />
      <SongList songs = {songList} handleOnMouseEnter={handleOnMouseEnter} handleOnMouseLeave={handleOnMouseLeave}/>
    </div>
  );
}

export default App;
