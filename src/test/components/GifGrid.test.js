import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test de <GifGrid />', () => {
    const category = 'One Punch';

    test('debe de mostrar correctamente <GifGrid />', () => {  
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {
        const gif = [{
            id: 'abc',
            url: 'https://localhost/cosa.jpg',
            title: 'Prueba'
        }];

        useFetchGifs.mockReturnValue({
            data: gif,
            loading: false
        });
        const wrapper = shallow(<GifGrid category={category} />);

        expect(wrapper.find('p').exists()).toBe(false);
        /*Evaluando si existe un componente*/
        expect(wrapper.find('GifGridItem').length).toBe(gif.length);
    });
});