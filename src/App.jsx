import AppLetras from "./Components/AppLetras"
import {BuscadorProvider} from "./Context/BuscadorProvider"

function App() {

  return (
    <BuscadorProvider>
      <AppLetras />
    </BuscadorProvider>
  )
}

export default App
