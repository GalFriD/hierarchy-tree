import { AppBar as AppBarMui, Toolbar, Typography } from '@mui/material';
import { UserDisplay } from '../../../../Components';
import { User } from '../../../../Models/User';
import { useStores } from '../../../../Store/InitStore';
import { RoutesEnum } from '../../../RoutesEnum';
import { useHistory } from 'react-router';
import { LogoutButton } from './styles';

function AppBar() {
  const { authenticationStore } = useStores();
  const history = useHistory();

  const onLogoutClick = () => {
    authenticationStore.logout();
    history.replace(RoutesEnum.LOGIN);
  };

  return (
    <AppBarMui position="fixed">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Hierarchy Tree
        </Typography>
        <UserDisplay user={authenticationStore.loggedInUser as User} />
        <LogoutButton onClick={onLogoutClick} color="inherit">
          Logout
        </LogoutButton>
      </Toolbar>
    </AppBarMui>
  );
}

export default AppBar;
