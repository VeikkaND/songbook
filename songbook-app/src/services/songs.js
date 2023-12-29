import axios from "axios"

const getTitles = async () => {
    const res = await axios.get("/api/")
    console.log(res.data)
    return res.data
}

const getSongFile = async (id) => {
    const res = await axios.get(`/api/${id}`)
    return res.data
}

export default {
    getTitles, getSongFile
}