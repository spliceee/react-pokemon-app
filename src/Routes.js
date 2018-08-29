import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  StaticHome,
  StaticNotFound
} from './statics';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={StaticHome} />
      <Route path="*" component={StaticNotFound} />
    </Switch>
  )
}