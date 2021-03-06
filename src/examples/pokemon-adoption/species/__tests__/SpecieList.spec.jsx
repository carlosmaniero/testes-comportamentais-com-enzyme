import * as React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { SpecieList } from '../SpecieList';
import moxios from 'moxios'


describe('SpecieList', () => {
  let store;
  let wrapper;

  const pokemons = () =>
    wrapper.find('li');

  const pokemonName = (index) =>
    pokemons().at(index).find('h3').text();

  beforeEach(() => {
    store = configureStore();
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

    wrapper = mount(
      <Provider store={store}>
        <SpecieList />
      </Provider>);
  });

  afterEach(function () {
    moxios.uninstall();
  });

  describe('Carregando a lista', () => {
    it('mostra que está carregando', () => {
      expect(wrapper.text())
        .toContain("Carregando");
    });

    it('mostra a lista baixada', async () => {
      await ensureRender(wrapper);

      expect(pokemons().length)
        .toBe(2);
      expect(pokemonName(0))
        .toBe('bulbasaur');
      expect(pokemonName(1))
        .toBe('pikachu');
    });
  });
});
