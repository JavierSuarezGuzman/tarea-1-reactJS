import React from 'react';
import { Link } from "react-router-dom";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";

const Header = ({ currentUser }) => {
  return <div className='header'> 
  <Link to="/">Home KuaKer! </Link>
  
  <div className='options'>
      <div>
        <Link className='option' to="/exercises">Todos los ejercicios</Link>

        <Link className='option' to="/about">Acerca de</Link>

        <Link className='option' to="/contact">Contacto</Link>

        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Cerrar sesión
          </div>
        ) : (
          <Link className='option' to="/signin">Iniciar sesión</Link>
        )}
      </div>
    </div>
  </div>
};

export default Header;
