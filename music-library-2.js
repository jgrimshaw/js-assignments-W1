
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
             },

  printPlaylists: function () {
  for(let key in this.playlists){
    const id = this.playlists[key].id
    const name = this.playlists[key].name
    const tracks = this.playlists[key].tracks.length
    console.log(`${id}: ${name} - ${tracks} tracks`)
    }
  },

  printTracks: function () {
  for(let key in this.tracks){
    const name = this.tracks[key].name
    const artist = this.tracks[key].artist
    const album = this.tracks[key].album
    console.log(`${key}: ${name} by ${artist} (${album})`)
    }
  },

  printPlaylist: function (plid) {
    //print playlist details
  const listName = this.playlists[plid].name
  const tracks = this.playlists[plid].tracks
  console.log(`${plid}: ${listName} - ${tracks.length} tracks`)

  tracks.forEach(function(elm){
    const name = library.tracks[elm].name
    const artist = library.tracks[elm].artist
    const album = library.tracks[elm].album
    console.log(`${elm}: ${name} by ${artist} (${album})`)
  })
},

addTrackToPlaylist: function (tid, pid) {
  const tracks = this.playlists[pid].tracks
  tracks.push(tid)
  console.log(this.playlists)
},



addTrack: function (name, artist, album) {
  const id = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  this.tracks[id] = {
    id: id,
    name: name,
    artist: artist,
    album: album
  }
  console.log(this.tracks)
  },

addPlaylist: function (name) {
  const plid = Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  this.playlists[plid] = {
    id: plid,
    name: name,
    tracks: ['t04']
  }
  console.log(this.playlists)
},

printSearchResults: function(query) {
for(let key in this.tracks){
  for(let j in this.tracks[key]){
    if(this.tracks[key][j].toLowerCase().search(query.toLowerCase()) != -1)
    console.log(this.tracks[key].name)
    }
  }
}


}

library.printPlaylists()
library.printTracks()
library.printPlaylist('p01')
library.addTrackToPlaylist('t01', 'p02')
library.addTrack('Pet Semetary', 'Ramones', 'Blitzkrieg')
library.addPlaylist('Hiphop')
library.printSearchResults('jon')
