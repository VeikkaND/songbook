import { useNavigate } from "react-router-dom"

function NavBar({id, maxId}) {
    const navigate = useNavigate()

    const handleHome = () => navigate("/")

    const handlePrev = () => {
        console.log(id)
        if(id >= 2) {
            const newId = parseInt(id) - 1
            navigate(`/${newId}`)
            window.location.reload(false)
        }
    }

    const handleNext = () => {
        if(id < maxId) {
            const newId = parseInt(id) + 1
            navigate(`/${newId}`)
            window.location.reload(false)
        }
    }

    return(
        <div className="navbar">
            <button onClick={handlePrev}>prev</button>
            <button onClick={handleHome}>home</button>
            <button onClick={handleNext}>next</button>
        </div>
    )
}

export default NavBar