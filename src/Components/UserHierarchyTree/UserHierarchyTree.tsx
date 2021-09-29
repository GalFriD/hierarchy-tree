import { User } from '../../Models/User';
import { useStores } from '../../Store/InitStore';
import { useEffect } from 'react';
import { Typography } from '@mui/material';
import { UserDisplay } from '../UserDisplay';
import { EmployeesContainer, TreeContainer, UserContainer } from './styles';

function Node(props: { user: User }) {
  return (
    <div>
      <UserContainer>
        <Typography variant={'h6'}>{props.user.employees.length ? '+' : '-'}</Typography>
        <UserDisplay user={props.user} />
      </UserContainer>
      <EmployeesContainer>
        {props.user.employees.map((user) => (
          <Node key={user.id} user={user} />
        ))}
      </EmployeesContainer>
    </div>
  );
}

function UsersHierarchyTree() {
  const { hierarchyTreeStore } = useStores();

  useEffect(() => {
    hierarchyTreeStore.fetchData();
  }, [hierarchyTreeStore]);

  return (
    <TreeContainer>
      {hierarchyTreeStore.nodes.length ? (
        hierarchyTreeStore.nodes.map((i) => <Node user={i} />)
      ) : (
        <Typography variant={'h4'}>NO DATA</Typography>
      )}
    </TreeContainer>
  );
}

export default UsersHierarchyTree;
