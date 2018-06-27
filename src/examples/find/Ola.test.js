import * as React from 'react';
import { mount } from 'enzyme';
import { Ola } from './Ola';


describe('Dizendo Olá', () => {
    it('mostra o nome como bold', () => {
        const wrapper = mount(
            <Ola nome="Mundo" />);
        expect(wrapper.find('strong').text())
            .toBe("Mundo");
    });

    it('diz Olá para o nome', () => {
        const wrapper = mount(
            <Ola nome="Mundo" />);
        expect(wrapper.text())
            .toBe("Olá, Mundo!");
    });
});