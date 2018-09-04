import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Statics
import {
  StaticHome,
  StaticNotFound
} from './statics';
// Layouts
import {
  PokemonList,
  PokemonItem
} from './layouts';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={StaticHome} />
      {/* <Route path="/pokemons" component={PokemonList} /> */}
      <Route path="/pokemons/:id" component={PokemonItem} />
      <Route path="*" component={StaticNotFound} />
    </Switch>
  )
}