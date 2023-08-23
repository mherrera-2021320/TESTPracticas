import React from 'react'
import { Link, NavLink } from "react-router-dom"


const App = () => {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Clases Manejo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="navbar-brand">Inicio </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li className="nav-item">
                    <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to='/clientes'>
                      clientes
                    </NavLink>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li> <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                    to='/clases'>
                    Clases
                  </NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li> <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to='/direcciones'>
                      Direcciones
                    </NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li> <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to='/pagos'>
                      Pagos
                    </NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li> <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to='/personal'>
                      Personal
                    </NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li> <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to='/servicios'>
                      Servicios
                    </NavLink></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li> <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to='/vehiculos'>
                      Vehiculos
                    </NavLink></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Proximanente</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  )
}

export default App