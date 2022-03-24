import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem'

//se recibe la categoria que se va a buscar
export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    //imprimira las imagenes a traves de un nuevo componente
    //en vez de enviar un parametro, se envia ...img para poder
    //desestructurar dicho componente
    //Cuando el componente se ejecuta varias veces, hay que poner una key unica
    return (
        <>
            <h2 className='animate__animated animate__fadeInDown'>{category}</h2>

            {loading && <p className='animate__animated animate__fadeInDown'>
                Cargando...</p>}

            <div className='card__row'>
                {
                    images.map( img => (
                        <GifGridItem 
                            key = {img.id}
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}
