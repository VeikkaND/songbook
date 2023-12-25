function SongShort(num, title) {
    const handleClick = () => {
        console.log("song clicked")
    }

    return(
        <div>
            <span onClick={handleClick}>
                {num} {title}
            </span>
        </div>
    )
}

export default SongShort