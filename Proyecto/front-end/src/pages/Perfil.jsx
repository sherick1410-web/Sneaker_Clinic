import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Perfil = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const manejarLogin = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch('http://localhost:3000/loginadmin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: usuario,
          password: contrasena
        })
      });

      const resultado = await respuesta.json();

      if (!respuesta.ok) {
        setError(resultado.message || 'Credenciales incorrectas');
        return;
      }

      setError('');
      navigate('/admin');
    } catch (error) {
      setError('Error de conexión con el servidor');
    }
  };

  // Redirige a la página de registro
  const irARegistro = () => {
    navigate('/Register');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="mb-4 text-center">Inicio de Sesión</h2>

        {/* Formulario de inicio de sesión */}
        <form onSubmit={manejarLogin}>
          <div className="mb-3">
            <label className="form-label">Usuario</label>
            <input
              type="text"
              className="form-control"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          {/* Botones centrados */}
          <div className="d-flex justify-content-center gap-2 mt-4">
            <button
              type="submit"
              className="btn btn-primary"
              style={{ backgroundColor: '#1e3a8a', borderColor: '#1e3a8a' }}
            >
              Iniciar Sesión
            </button>

            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={irARegistro}
            >
              Registro
            </button>
          </div>

          {/* Mostrar error si ocurre alguno */}
          {error && <div className="text-danger mt-3 text-center">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Perfil;
 