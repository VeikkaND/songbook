import { useEffect } from "react"
import { useParams } from "react-router-dom"

function SongPage() {
    const {id} = useParams()

    useEffect(() => {
        
    }, [])

    return(
        <div>
            {id}
        </div>
    )
}

export default SongPage