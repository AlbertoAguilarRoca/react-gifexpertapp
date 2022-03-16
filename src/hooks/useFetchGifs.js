import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";



export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //nuevo hook para ejecutar solo una vez la funcion getGifs()
    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setState({
                    data: imgs,
                    loading: false
                })
            })

    }, [category]);

    return state;
}