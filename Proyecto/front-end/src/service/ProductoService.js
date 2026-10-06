import axios from 'axios'

const  api =  'http://localhost:3000/listarp'

export const ObtenerProductos = async ()=>{
    const listadoP = await  axios.get(api)
    return listadoP.data
}