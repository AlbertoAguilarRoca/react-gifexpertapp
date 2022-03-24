import React, { useState } from 'react';
import PropTypes from 'prop-types';

//recibe por parametro la funcion del hook useState
export const AddCategory = ( {setCategories} ) => {
    //hook useState con la informacion del input 
    const [inputValue, setinputValue] = useState('');

    const handleInputValue = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //metemos dentro del useState la nueva categoria
        if(inputValue.trim().length > 2) {
            //Metemos el nuevo valor junto con las categorias
            //que ya habia antes
            setCategories(category => [inputValue, ...category ]);
            setinputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='buscador'>
                <i className='bi bi-plus-circle'></i>
                <input 
                    type='text' 
                    value={ inputValue }
                    onChange = { handleInputValue }
                />
            </div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
