import * as React from 'react';
import { mount } from 'enzyme';
import { Ola } from './Ola';


describe('Dizendo Olá', () => {
    it('diz Olá para o nome', () => {
        const wrapper = mount(
            <Ola nome="Mundo" />);
        expect(wrapper.text())
            .toBe("Olá, Mundo!");
    });
});