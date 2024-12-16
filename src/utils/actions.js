import axios from  "./axios"

const getData = async (currency) => {
    const res = await axios.get(currency);
    return res.data
}
export {
    getData
}