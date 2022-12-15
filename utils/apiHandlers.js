import axios from "axios"

// const API_BASE_URL = "https://asubo.herokuapp.com"
const API_BASE_URL = "http://127.0.0.1:8000/api"
let config = {
    "headers": {
        "accept":"application/json",
        "content-type": "application/json"
    },
}

export const get = async(url) => {
    return await axios.get(`${API_BASE_URL}/${url}`, config)
}

export const post = async(url, body, token = null, type='application/json' ) => {
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    console.log(config)
    return await axios.post(`${API_BASE_URL}/${url}`, body, config)
}

export const update = async(url, body) => {
    return await axios.put(`${API_BASE_URL}/${url}`, body, config)
}

export const erase = async(url) => {
    return await axios.delete(`${API_BASE_URL}/${url}`, config)
}

// export const getUserFromToken = (token) => {
//     // const string = token.split('.')[1]
//     // return JSON.parse(atob(string))
// }

// export const saveToken = data => {
//     Cookies.set('token', data);
// }

// export const getToken = () => {
//     return Cookies.get().token
// }

// export const getIdFromUrl = (url) => {
//     try {
//         const str =  url.split('/')
//         return str[str.length - 2]
//     } catch (error) {
        
//     }
// }

// export const deleteToken = () => {
//     return Cookies.remove('token')
// }

// export const parseCookies = (req) => {
//     return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
// }

// export const setConfig = (token, type = 'application/json') => {
//     return {
//         headers: {
//             "Content-Type": type,
//             "Authorization": `Token ${token}`
//         }
//     }
// }


