import {useState} from 'react'

const useValorInput = (url, estadoInicial) => {
   const [valorInput, setValorInput] = useState('')
    const onChangeValor = (event) => {
        setValorInput(event.target.value)
    }
   
    return [valorInput, onChangeValor]

}

export default useValorInput
