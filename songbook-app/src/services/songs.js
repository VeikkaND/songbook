import axios from "axios"

const getTitles = async () => {
    const res = await axios.get("/api/")
    return res.data
}

const getSongFile = async (id) => {
    const res = await axios.get(`/api/${id}`)
    return res
}

export default {
    getTitles, getSongFile
}