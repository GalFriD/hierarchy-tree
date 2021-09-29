import { UserHierarchyTree } from '../../Components';
import { AppBar } from './Components';
import { Container, TreeWrapper } from './styles';

function Main() {
  return (
    <Container>
      <AppBar />
      <TreeWrapper>
        <UserHierarchyTree />
      </TreeWrapper>
    </Container>
  );
}

export default Main;
