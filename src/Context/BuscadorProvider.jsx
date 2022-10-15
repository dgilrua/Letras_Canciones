import {createContext, useState} from 'react'
import axios from 'axios'

const BuscadorContext = createContext()

const BuscadorProvider = ({children}) => {

    const [alerta, setAlerta] = useState('')

    const consultarLetra = async data => {
        try {
            const {artista, cancion} = data
            const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
            const respuesta = await axios(url)
            console.log(respuesta)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <BuscadorContext.Provider
        value={{
            setAlerta,
            alerta,
            consultarLetra
        }}
    >
        {children}
    </BuscadorContext.Provider>
  )
}

export {BuscadorProvider}
export default BuscadorContext 