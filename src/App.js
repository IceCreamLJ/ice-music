import React, { memo } from 'react'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux' 

import { renderRoutes } from 'react-router-config'
import routeList from '@/router/routeList'
import store from '@/store'

import AppHeader from '@/components/app-header'
import PlayerBar from '@/pages/player/player-bar'
import AppFooter from '@/components/app-footer'

import '@/assets/css/reset.css';

const App = memo(() => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppHeader/>
        {renderRoutes(routeList)}

        <PlayerBar/>
        <AppFooter/>
      </Provider>
    </HashRouter>
  );
});

export default App;