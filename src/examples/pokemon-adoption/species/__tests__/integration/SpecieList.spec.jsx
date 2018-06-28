import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../../../store';
import { Cart } from '../../../cart/Cart';
import { SpecieList } from '../../SpecieList';
import moxios from 'moxios'

describe('Adotando um Pokémon', () => {
    let store;
    let wrapper;
    
    const addToCartButton = (index) =>
        wrapper.find('.add-to-cart')
            .at(index)
            .simulate('click');

    const cartCounter = () =>
        parseInt(
            wrapper.find('.cart-counter')
                .text()
        );

    beforeEach(() => {
        moxios.install();
        moxios.stubRequest(
            'https://pokeapi.co/api/v2/pokemon/?limit=200',
            {
                status: 200,
                response: {
                    results: [
                        { name: 'bulbasaur' },
                        { name: 'pikachu' },
                    ]
                }
            }
        );
        store = configureStore();
        wrapper = mount(
          <Provider store={store}>
            <React.Fragment>
                <Cart />
                <SpecieList />
            </React.Fragment>
          </Provider>);
    });

    it('aumenta o contador', async () => {
        await ensureRender(wrapper);
        addToCartButton(0);
        expect(cartCounter()).toEqual(1);
    });
})