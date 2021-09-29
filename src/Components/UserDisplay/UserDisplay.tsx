import Typography from '@mui/material/Typography';
import { User } from '../../Models/User';
import { UserAvatar } from '../UserAvatar';
import { ColumnContainer, Container } from './styles';

function UserDisplay(props: { user: User }) {
  return (
    <Container>
      <UserAvatar user={props.user} />
      <ColumnContainer>
        <Typography variant={'body1'} noWrap={true}>
          {props.user.fullname}
        </Typography>
        <Typography variant={'caption'} noWrap={true}>
          {props.user.email}
        </Typography>
      </ColumnContainer>
    </Container>
  );
}

export default UserDisplay;
