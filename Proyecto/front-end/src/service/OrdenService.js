import axios from 'axios'

const  api =  'http://localhost:3000/listaro'

export const Obtenerorden = async ()=>{
    const listadoP = await  axios.get(api)
    return listadoP.data
}