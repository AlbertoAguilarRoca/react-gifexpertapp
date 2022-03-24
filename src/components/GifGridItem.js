import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ({title, url}) => {

  return (
    <div className='card animate__animated animate__fadeInDown'>
      <div className='card__content'>
        <img src={url} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
