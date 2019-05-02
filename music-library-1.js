const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
}

const printAtrack = function(trid){
    // const trid = library.tracks[trid].id
    const name = library.tracks[trid].name
    const artist = library.tracks[trid].artist
    const album = library.tracks[trid].album
    console.log(`${trid}: ${name} by ${artist} (${album})`)
  }

// FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


const printPlaylists = function (obj) {
  for(let key in library.playlists){
    const id = library.playlists[key].id
    const name = library.playlists[key].name
    const tracks = library.playlists[key].tracks.length
    console.log(`${id}: ${name} - ${tracks} tracks`)
  }
}
printPlaylists(library)

//==========================================================

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

const printTracks = function (obj) {
  for(let key in library.tracks){
    printAtrack(key)
  }
}
printTracks(library)

//==========================================================

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

const printPlaylist = function (plid) {
  //print playlist details
  const listName = library.playlists[plid].name
  const tracks = library.playlists[plid].tracks
  console.log(`${plid}: ${listName} - ${tracks.length} tracks`)

//print track function on the top - printAtrack
  tracks.forEach(printAtrack)
}
printPlaylist('p01')

//==========================================================

// adds an existing track to an existing playlist
const addTrackToPlaylist = function (tid, pid) {
  // push tid to pid
  const tracks = library.playlists[pid].tracks
  tracks.push(tid)
  console.log(library.playlists)
}
addTrackToPlaylist('t01', 'p02')

//==========================================================

// generates a unique id
// (use this for addTrack and addPlaylist)
const uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

//==========================================================

// adds a track to the library
const addTrack = function (name, artist, album) {
  const id = uid()
  library.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album
  }
console.log(library.tracks)
}
addTrack('Pet Semetary', 'Ramones', 'Blitzkrieg')

//==========================================================

// adds a playlist to the library
const addPlaylist = function (name) {
  const plid = uid()
  library.playlists[plid] = {
    id: plid,
    name: name,
    tracks: ['t04']
  }
  console.log(library.playlists)
}
addPlaylist('Hiphop')

//==========================================================

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

const printSearchResults = function(query) {
// in tracks search name, artist and album
// if match print list of tracks
for(let key in library.tracks){
  for(let j in library.tracks[key]){
    if(library.tracks[key][j].toLowerCase().search(query.toLowerCase()) != -1)
    console.log(library.tracks[key].name)
    }
  }
}
printSearchResults('jon')




