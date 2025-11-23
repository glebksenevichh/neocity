let user = 'gleb_ksenevich'
let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
let song = document.querySelector('#song');

fetch(url)
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    let trackName = json['track']['name'];
    let artistName = json['track']['artist']['#text'];
    let trackUrl = json['track']['url'];
    
    song.innerHTML = '<a href="' + trackUrl + '" target="_blank" style="color: inherit;">' + trackName + ' - ' + artistName + '</a>';
  });