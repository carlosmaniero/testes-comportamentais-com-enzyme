import * as React from 'react';
import { connect } from 'react-redux';
import { actions } from './actions';
import { actions as cartActions } from '../cart/actions';
import './SpecieList.css';


class SpecieListImpl extends React.Component {
  componentWillMount () {
    this.props.dispatch(actions.fetchPokemons());
  }

  render () {
    if (this.props.species.length === 0) {
      return <div>Carregando ...</div>
    }
    return <div className="specie-list-wrapper">
      <h1>Escolha seu Pokémon</h1>

      <ul className="specie-list">
        {this.props.species.map(this.renderPokemon.bind(this))}
      </ul>
    </div>;
  }

  renderPokemon(name) {
    return <li key={name}>
      <h3>{name}</h3>
      <button className="add-to-cart" onClick={() => this.props.dispatch(cartActions.addToCart(name))}>Adotar</button>
    </li>;
  }
}

const mapStateToProps = (state) => ({
  species: state.specieList
});

export const SpecieList = connect(mapStateToProps)(SpecieListImpl);
