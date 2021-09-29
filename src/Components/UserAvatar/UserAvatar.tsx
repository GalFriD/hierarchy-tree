import { User } from '../../Models/User';
import { Typography } from '@mui/material';
import { blue, blueGrey, deepOrange, deepPurple, orange } from '@mui/material/colors';
import { StyledAvatar } from './styles';

const ARRAY_OF_COLORS = [deepOrange, deepPurple, blue, blueGrey, orange];

function getRandomColor() {
  return ARRAY_OF_COLORS[Math.floor(Math.random() * ARRAY_OF_COLORS.length)];
}

function UserAvatar(props: { user: User }) {
  const { user } = props;

  return user.photo ? (
    <StyledAvatar alt={`${user.fullname}`} src={props.user.photo} />
  ) : (
    <StyledAvatar alt={`${user.fullname}`} sx={{ bgcolor: getRandomColor()[500] }}>
      <Typography
        variant={'body1'}
      >{`${user.firstName[0].toLocaleUpperCase()} ${user.lastName[0].toLocaleUpperCase()}`}</Typography>
    </StyledAvatar>
  );
}

export default UserAvatar;
