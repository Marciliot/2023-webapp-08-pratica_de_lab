import { useState } from "react"

const AppNavBar = () => {
  return(
      <h1>API</h1>
  )
}
const AppUFLista = (props: any) => {
  return(
    <>
      <ul>
          <li>{props.sigla}</li>
      </ul>
    </>
  )
}
const AppUFDetalhe = () =>{
  return(
    <>
      <h2> RN </h2>
      <p> Rio grande de norte </p>
      <h2> SP </h2>
      <p> SAO PAULO</p>
      <h2> RJ </h2>
      <p> Rio DE JANERIO</p>
      <h2> BA</h2>
      <p> BAHIA </p>
      <h2> AL </h2>
      <p> Alagoas </p>

      
    </>
  )

  

}

function App() {
  const [uf, setUf] = useState([
    "RN", 
    "SP",
    "RJ",
    "BA",
    "AL",
  ])

  return (
    <>
      <AppNavBar />
        {uf.map( (uf, indice ) => (<AppUFLista key ={indice} sigla={uf}></AppUFLista>) )}
      <AppUFDetalhe />
    </>
  )
}

export default App
