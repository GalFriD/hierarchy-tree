import { action, observable } from 'mobx';
import { User } from '../Models/User';
import { UsersService } from '../Services';

function createHierarchyTreeDataFromUsers(users: User[]) {
  let map: any = {},
    node,
    roots = [],
    i;

  for (i = 0; i < users.length; i++) {
    map[users[i].id] = i;
    users[i].employees = [];
  }

  for (i = 0; i < users.length; i++) {
    node = users[i];
    if (node.managerId) {
      users[map[node.managerId]].employees.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}

export class HierarchyTreeStore {
  @observable
  nodes: User[] = [];

  constructor() {
    this.fetchData();
  }

  @action fetchData = async () => {
    const users = await UsersService.getUsers();

    this.nodes = createHierarchyTreeDataFromUsers(users);
  };
}
