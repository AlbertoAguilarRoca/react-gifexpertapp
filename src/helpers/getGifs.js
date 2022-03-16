
//funcion que consulta datos a la api de giphy
//devuelve un array de objetos con la info de gif
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6AQ4rmd3Cjt7lrR4Cez03zkgtngmZa1s`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    });

    return gifs;

}