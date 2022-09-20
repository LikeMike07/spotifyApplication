import SongListEntry from './SongListEntry';

const SongList = ({songs, handleOnMouseEnter, handleOnMouseLeave}) => {
  return (
<div className="video-list">
      {songs.map((song) => {
        return (
          <SongListEntry
            key={song.id}
            song={song}
            handleOnMouseEnter={handleOnMouseEnter}
            handleOnMouseLeave={handleOnMouseLeave}
          />
        );
      })}
    </div>
  );
}

export default SongList;