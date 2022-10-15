import React, { useState } from 'react'
import useBuscador from '../Hooks/useBuscador'

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const {setAlerta, consultarLetra} = useBuscador()

    const handleSubmit = e => {
        e.preventDefault()

        if(Object.values(busqueda).includes('')) {
            setAlerta('Ingresa el artista y la cancion que quieras buscar')
            return
        }

        setAlerta('')
        consultarLetra(busqueda)
    }

  return (
    <>
        <form action=""
            onSubmit={handleSubmit}
        >
            <legend>Busca por artistas y cancion</legend>
            <div className='grid'>
                <div>
                    <label htmlFor="artista">Artista</label>
                    <input 
                        type="text"
                        id='artista' 
                        name='artista'
                        value={busqueda.artista}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value 

                        })}
                        placeholder='Nombre Artista'
                    />
                </div>
                <div>
                    <label htmlFor="cancion">Cancion</label>
                    <input 
                        type="text"
                        id='cancion' 
                        name='cancion'
                        placeholder='Nombre Cancion'
                        value={busqueda.cancion}
                        onChange={e => setBusqueda({
                            ...busqueda,
                            [e.target.name] : e.target.value 

                        })}
                    />
                </div>
                <input 
                    type="submit" 
                    value='Buscar' 
                />
            </div>
        </form>
    </>
  )
}

export default Formulario