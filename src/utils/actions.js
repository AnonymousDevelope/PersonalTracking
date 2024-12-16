import axios from  "./axios"

const getData = async (currency) => {
    const res = await axios.get(currency);
    return res.data
}

const getLocalStorage = () => {
    const data = localStorage.getItem('transactions');
    return data ? JSON.parse(data) : []
}
const setLocalStorage = (data) => localStorage.setItem('transactions', JSON.stringify(data));
export {
    getData,
    getLocalStorage,
    setLocalStorage
}