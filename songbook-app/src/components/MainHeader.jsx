import { useNavigate } from "react-router-dom"

function MainHeader() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }

    return (
        <div>
            <h1 onClick={handleClick}>Songbook 🎼</h1>
        </div>
    )
}

export default MainHeader