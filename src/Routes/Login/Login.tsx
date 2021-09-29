import { useStores } from '../../Store/InitStore';
import { Redirect, useHistory } from 'react-router';
import { RoutesEnum } from '../RoutesEnum';
import { DATA_KEYS, LoginForm } from './Components';
import { useState } from 'react';
import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Container } from './styles';

function Login() {
  const { authenticationStore } = useStores();
  const history = useHistory();
  const [showError, setShowError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  if (authenticationStore.isAuthenticate) {
    return <Redirect to={RoutesEnum.MAIN} />;
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    setShowError(false);
  };

  const onSubmit = async (values: any) => {
    try {
      setLoading(true);
      await authenticationStore.authenticate(values[DATA_KEYS.EMAIL], values[DATA_KEYS.PASSWORD]);
      history.replace(RoutesEnum.MAIN);
    } catch (e) {
      setShowError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={onSubmit} isLoading={isLoading} />
      <Snackbar
        open={showError}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error">Please try again!</Alert>
      </Snackbar>
    </Container>
  );
}

export default Login;
