import React from 'react'

export const GifGridItem = ({id, title, url}) => {

  return (
    <div className='card animate__animated animate__fadeInDown'>
      <div className='card__content'>
        <img src={url} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  )
}
