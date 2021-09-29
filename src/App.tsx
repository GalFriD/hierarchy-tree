import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StoreProvider, useStores } from './Store/InitStore';
import { Redirect, Route, Switch } from 'react-router';
import { RoutesEnum } from './Routes/RoutesEnum';
import { Login, Main } from './Routes';

const AuthenticateRoute = (props: any) => {
  const { authenticationStore } = useStores();

  if (authenticationStore.isAuthenticate) {
    return <Route {...props} />;
  } else {
    return <Redirect to={RoutesEnum.LOGIN} />;
  }
};

function App() {
  return (
    <React.StrictMode>
      <Router>
        <StoreProvider>
          <Switch>
            <Route path={RoutesEnum.LOGIN} component={Login} />
            <AuthenticateRoute path={RoutesEnum.MAIN} component={Main} />
            <Redirect from={'/'} to={RoutesEnum.MAIN} />
          </Switch>
        </StoreProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
