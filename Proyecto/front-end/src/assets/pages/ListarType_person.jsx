import { useState, useEffect } from 'react'
import { ObtenerProductos } from '../../service/ProductoService'

export default function ListarProductos() {

    const [productos, setProductos] = useState([])
    const [error, SerError] = useState('')

    useEffect((c)=> {
        fetchProductos()
    }, [])


    const fetchProductos = async ()=>{
        try{
            const respuesta = await ObtenerProductos()
        setProductos (respuesta)
        }
        catch(error){
            setError(error)

        }
    }
  return (
    <div className='container'>
        <h1 className='text-center'>Listado de Estados</h1>
        <table class="table table-striped">
  <thead>
    <tr className='text-center'>
      <th scope="col">Id_status</th>
      <th scope="col">Descripcion</th>
    </tr>
  </thead>
  <tbody>
    {productos.map((p)=>
    <tr key={p.codigo} className='text-center'>
    <td scope="row">{p.id_status}</td>
    <td scope="row">{p.description_}</td>
    <td scope="row"><button type="button" class="btn btn-danger ">Eliminar</button>
    <button type="button" class="btn btn-primary ms-2">Editar</button>
    </td>
    
    </tr>
    )}
   
      </tbody>
      </table>
    </div>
  )
}
