import {$, jQuery} from 'jquery';
window.$ = $;
window.jQuery = jQuery;
// import { API_KEY } from '../config/config.js';
var url = 'http://localhost:3001/';
var searchSpotify = (query, callback) => {
  $.get(url, {}, (data) => {
    console.log('Tried to get, GOT:');
    console.log(data);
  });
};


// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

export default searchSpotify;