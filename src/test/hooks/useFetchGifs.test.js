/* Libreria que permite hacer test en los custom hooks renderizandolos.
Por el momento react no permite hacerlo, asi que es necesario usar esta
libreria. */
import { renderHook } from '@testing-library/react-hooks';

import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe de retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
        /* Una vez renderizado, tendremos acceso a los valores que trae ese
        custom hook */
        const {data, loading} = result.current;
        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('debe de retornar un arreglo de imagenes y loading false', async() => {
        /* waitForNextUpdate: esperamos un nuevo cambio en el estado  */
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One Punch') );
        await waitForNextUpdate();
        const {data, loading} = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    });

});