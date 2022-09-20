const Search = () => {
  return (
    <div className="search-bar form-inline">
      <input className="form-control" type="text" onChange={(e) => {
        //debounceCall(e.target.value);
      }}/>
      <button className="btn hidden-sm-down" onClick={(e) => {
        // $('.form-control').val('');
      }}>
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
  );
}

export default Search;
