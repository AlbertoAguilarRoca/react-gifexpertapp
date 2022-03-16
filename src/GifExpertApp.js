import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifDrid } from './components/GifDrid';

//Componente principal
const GifExpertApp = () => {

    //Hook con las categorias de Gif
    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Componente para añadir categorias a través de un form*/}
            <AddCategory setCategories = {setCategories} />
            <hr/>

            <div>
                {
                    categories.map((category) => (
                        <GifDrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </div>
        </>
    );
}

export default GifExpertApp;