import { useEffect } from 'react'
import { useHistory } from 'react-router'

const usePaginaProtegida = () => {
    const history = useHistory()

    useEffect(() => {
        const token = window.localStorage.getItem("Token")

        if(token === null){
            history.push('/login')
        }
    }, [history])
}

export default usePaginaProtegida