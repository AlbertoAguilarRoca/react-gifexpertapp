import { getGifs } from "../../helpers/getGifs";


describe('Pruebas con getGifs Fetch', () => { 

    test('debe de traer 10 elementos', async() => { 
        const data = await getGifs('One Punch');
        expect(data.length).toBe(10);
    });

});