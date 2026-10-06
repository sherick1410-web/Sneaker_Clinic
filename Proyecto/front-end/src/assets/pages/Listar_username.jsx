import { useState, useEffect } from 'react'
import { Obtenerusername } from '../../service/UsernameService'
import Swal from 'sweetalert2'
import axios from 'axios'
export default function ListarUsername() {

    const [Username, setUsername] = useState([])
    const [error, setError] = useState('')

    useEffect((c)=> {
        fetchUsername()
    }, [])


    const fetchUsername = async ()=>{
        try{
            const respuesta = await Obtenerusername()
        setUsername(respuesta)
        }
        catch(error){
          alert(error)
            setError(error)

        }
    }

  const handlEliminar= (document) => {
          Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    axios.delete( `http://localhost:3000/${document} ` )
    .then (()=> fetchUsername() )
    .catch(error, ()=>console.log(error))
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
    }
  return (
    <div className='container'>
        <h1 className='text-center'>Listado de Usuarios</h1>
        <table className="table table-striped">
  <thead>
    <tr className='text-center'>
      <th scope="col">Primer Nombre</th>
      <th scope="col">Segundo Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Segundo Apellido</th>
      <th scope="col">Documento</th>
      <th scope="col">Telefono</th>
      <th scope="col">Tipo de Persona</th>
      <th scope="col">id_status</th>
      <th scope="col">Username</th>
      <th scope="col">Password</th>
    </tr>
  </thead>
  <tbody>
    {Username.map((p)=>
    <tr key={p.document} className='text-center'>
    <td scope="row">{p.name_}</td>
    <td scope="row">{p.name2_}</td>
    <td scope="row">{p.lastname_}</td>
    <td scope="row">{p.lastname2_}</td>
    <td scope="row">{p.document}</td>
    <td scope="row">{p.telephone}</td>
    <td scope="row">{p.type_personfk}</td>
    <td scope="row">{p.id_status_fk}</td>
    <td scope="row">{p.username}</td>
    <td scope="row">{p.password_}</td>
    <td scope="row">< button onClick={()=>handlEliminar(p.document)}  type="button" className="btn btn-danger ">Eliminar</button><br /><br />
    <button type="button" className="btn btn-primary ">Editar</button> </td>
    </tr>
    )}
   
      </tbody>
      </table>
    </div>
  )
}
