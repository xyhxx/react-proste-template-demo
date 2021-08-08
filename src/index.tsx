import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';
import {Provider} from 'react-redux';
import routes from '@routes/index';
import store from '@stores/index';

import '@styles/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          {renderRoutes(routes)}
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

