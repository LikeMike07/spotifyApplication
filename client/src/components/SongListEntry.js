const SongListEntry = ({song, handleOnMouseEnter, handleOnMouseLeave}) => {
  const src = song.album.images[1].url;
  return (
    <div className="video-list-entry media"
    onClick={() => {
      //handleOnMouseEnter(song);
    }}>
    <div className="media-left media-middle">
      <img
        onMouseEnter={()=> {
          console.log('enter');
          handleOnMouseEnter(song);
        }}
        onMouseLeave={() => {
          handleOnMouseLeave(song);
        }}
        alt="albumArt"
        className="media-object"
        src = {src}
      />

    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{song.name}</div>
      <div className="video-list-entry-detail">{song.artists[0].name}</div>
    </div>
  </div>
  );
}

export default SongListEntry;