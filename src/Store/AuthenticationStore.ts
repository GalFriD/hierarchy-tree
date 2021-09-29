import { action, computed, observable } from 'mobx';
import { AuthenticationService, UsersService } from '../Services';
import { User } from '../Models/User';

export class AuthenticationStore {
  @observable
  loggedInUser?: User;

  @computed get isAuthenticate() {
    return !!this.loggedInUser;
  }

  @action authenticate = async (email: string, password: string) => {
    const userId = await AuthenticationService.authenticate(email, password);
    this.loggedInUser = await UsersService.getUserById(userId);
  };

  @action logout = () => {
    this.loggedInUser = undefined;
  };
}
