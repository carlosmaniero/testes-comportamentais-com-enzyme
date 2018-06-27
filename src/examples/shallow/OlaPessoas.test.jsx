import * as React from 'react';
import { shallow } from 'enzyme';
import { Ola } from '../find/Ola';
import { OlaPessoas } from './OlaPessoas';

describe('OlaPessoas', () => {
    const ada = 'Ada Lovelace';
    const grace= 'Grace Hopper';

    it('diz olá para a lista de nomes', () => {
        const wrapper = shallow(
            <OlaPessoas
                nomes={[ada, grace]} />);
        
        const olaLista = wrapper.find(Ola);
       
        expect(olaLista.length)
            .toBe(2);

        expect(olaLista.at(0).prop('nome'))
            .toBe(ada);

        expect(olaLista.at(1).prop('nome'))
            .toBe(grace);
    });
});