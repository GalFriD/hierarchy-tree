import { styled } from '@mui/material';

export const Container = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
});

export const TreeWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100% - 94px)',
  paddingTop: '94px',
});
