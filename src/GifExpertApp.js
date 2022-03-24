import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Componente principal
const GifExpertApp = ({defaultCategories = []}) => {

    //Hook con las categorias de Gif
    //const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Componente para añadir categorias a través de un form*/}
            <AddCategory setCategories = {setCategories} />
            <hr/>

            <div>
                {
                    categories.map((category) => (
                        <GifGrid 
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