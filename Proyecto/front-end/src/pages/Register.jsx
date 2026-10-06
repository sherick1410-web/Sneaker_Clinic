import React, { useState } from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

export default function Register() {
   const [username, setNuevoUsername] = useState({
    name_: '',
    name_2: '',
    lastname_: '',
    lastname_2: '',
    document: 0,
    telephone: 0,
    username: '',
    password: ''
   })
     const handleChange = (e) => {
    setNuevoUsername({ ...username, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/insertaru', username)
      .then(response => {
        Swal.fire('Exitoso', 'Producto Registrado', 'success')
      })
      .catch(error => console.log(error))
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Registro de Usuario</h2>
      <form  onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Primer Nombre</label>
            <input onChange={handleChange} className="form-control" name="name_" />
          </div>
          <div className="col">
            <label className="form-label">Segundo Nombre</label>
            <input onChange={handleChange} className="form-control" name="name_2" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Primer Apellido</label>
            <input onChange={handleChange} className="form-control" name="lastname_" />
          </div>
          <div className="col">
            <label className="form-label">Segundo Apellido</label>
            <input onChange={handleChange} className="form-control" name="lastname_2" />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Documento</label>
          <input onChange={handleChange} className="form-control" name="document" type='number' />
        </div>

        <div className="mb-3">
          <label className="form-label">Telefono</label>
          <input onChange={handleChange} className="form-control" name="telephone" type='number'/>
        </div>
        <div className="mb-3">
          <label className="form-label">Nombre de Usuario</label>
          <input onChange={handleChange} className="form-control" name="username" />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input onChange={handleChange} className="form-control" name="password" />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Registrarse
        </button>
      </form>
    </div>
  )
}
