import axios from  "./axios"

const getData = async (currency) => {
    const res = await axios.get(currency);
    return res.data
}

const getLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    }
    return [];
  };
  
const setLocalStorage = (key, data) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };
//   remove id from local storage
const deleteLocalStorage = (key) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  };
export {
    getData,
    getLocalStorage,
    setLocalStorage,
    deleteLocalStorage
}