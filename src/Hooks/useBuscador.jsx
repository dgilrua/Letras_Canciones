import { useContext } from 'react'
import BuscadorContext from '../Context/BuscadorProvider'

const useBuscador = () => {
  return (
    useContext(BuscadorContext)
  )
}

export default useBuscador