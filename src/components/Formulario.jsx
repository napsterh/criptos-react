import { useEffect } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'

const InputSubmit = styled.input`
   background-color: #9497FF;
   border: none;
   width: 100%;
   padding: 10px;
   color: #FFF;
   font-weight: 700;
   text-transform: uppercase;
   font-size: 20px;
   border-radius: 5px;
   transition: background-color .3s ease;
   &:hover {
      background-color: #7A7DFE;
      cursor: pointer;
   }
`

const Formulario = () => {

   const monedas = [
      {id: 'USD', nombre: 'Dolar de Estados Unidos'},
      {id: 'MXN', nombre: 'Peso mexicano'},
      {id: 'EUR', nombre: 'Euro'},
      {id: 'GBP', nombre: 'Libra esterlina'}
   ]

   const [ moneda, SelectMonedas ] =  useSelectMonedas('Elige tu moneda', monedas)

   useEffect(() => {
      const consultarAPI = async () => {
         const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
         const respuesta = await fetch(url)
         const resultado = await respuesta.json()
         console.log(resultado.data)
      }
      consultarAPI()
   }, [])
   

   return (
      <form>

         <SelectMonedas/>

         <InputSubmit
            type='submit'
            value='Cotizar'
         />
      </form>
   )
}

export default Formulario