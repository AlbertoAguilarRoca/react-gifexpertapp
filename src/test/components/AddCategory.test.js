import React from 'react';
import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';


describe('Pruebas en <AddCategory />>', () => { 

    //jest.fn() simula una funcion cualquiera
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        //Todas las funciones que se me han mockeado se limpian
        //antes de cada test
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('debe de mostrarse correctamente', () => { 
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Goku';
        //Ese target me permite simular el parametro e
        //que se le pasa a la funcion al lanzar el evento
        input.simulate('change', {target: {value}});
    });

    test('No debe de postear la informacion al hacer submit', () => {
        wrapper.find('form').simulate('submit', {
            preventDefault(){} //mandamos un metodo a traves del evento
        });
        //Al no tener contenido el inputValue, no se debe de lanzar la
        //funcion setCategory. Eso es lo que vamos a testar
        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar el setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'Goku';
        //simulo el change
        input.simulate('change', {target: {value}});
        //simulo el submit
        wrapper.find('form').simulate('submit', {
            preventDefault(){} //mandamos un metodo a traves del evento
        });
        expect(setCategories).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');
    });

});