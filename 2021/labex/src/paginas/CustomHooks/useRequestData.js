import {useState, useEffect} from 'react'
import axios from 'axios'

const useRequestData = (url, estadoInicial) => {
    const [data, setData] = useState(estadoInicial)

    useEffect(() => {
        axios.get(url)
        .then((res) => {
            setData(res.data.trips)
            console.log(res.data)
        })

    }, [url])

    return data
}

export default useRequestData

