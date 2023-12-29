import { useEffect, useState } from "react"
import songsService from "../services/songs"
import SongShort from "./SongShort"

function SongList() {
    const [songs, setSongs] = useState([])
    
    useEffect(() => {
        async function getSongTitles() {
            console.log("fetching...")
          const res = await songsService.getTitles()
          setSongs(res)
        }
        getSongTitles()
    }, [])

    if(songs.length > 0) {
        return(
            <div>
                {songs.map(song => <SongShort title={song.title} 
                id={song.id} key={song.id}/>)}
            </div>
        )
    }

    return(
        <div>
            {songs.length > 0
            ? songs.map(song => <SongShort title={song.title} 
                id={song.id} key={song.id}/>)
            : "Loading songs..."
            }
        </div>
    )
}

export default SongList