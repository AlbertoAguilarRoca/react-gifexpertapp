import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas de <GifGridItem />', () => {
    
    const title = 'Título';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow(<GifGridItem title={title} url={url} />);

    test('debe mostrar <GifGridItem /> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de tener un h3 con el title', () => { 
        const h3 = wrapper.find('h3');
        expect( h3.text().trim() ).toBe(title);
    });

    test('debe de tener la imagen con src y alt', () => { 
        const img = wrapper.find('img');
        //Props divide todo los atributos de un elemento en un objeto
        expect( img.props().src ).toBe(url);
        //Prop permite seleccionar un atributo en concreto
        expect( img.prop('alt') ).toBe(title);
    });

    test('debe contener la clase animate__fadeInDown', () => { 
        const div = wrapper.find('div').at(0);
        //comprueba si tiene la clase
        const hasClass = div.prop('className').includes('animate__fadeInDown');
        expect(hasClass).toBe(true);
     });

});