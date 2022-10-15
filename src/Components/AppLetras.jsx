import React from 'react'
import useBuscador from '../Hooks/useBuscador'
import Alerta from './Alerta'
import Formulario from './Formulario'

const AppLetras = () => {

    const {alerta} = useBuscador()

  return (
    <>
        <header>
            <h1>Busqueda de letras de canciones</h1>
        </header>
        
        <Formulario />

        <main>
            {alerta && <Alerta>{alerta}</Alerta>}
        </main>
    </>
  )
}

export default AppLetras