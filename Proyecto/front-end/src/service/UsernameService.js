import axios from 'axios'

const  api =  'http://localhost:3000/listaru'

export const Obtenerusername = async ()=>{
    const listadou = await  axios.get(api)
    return listadou.data
}