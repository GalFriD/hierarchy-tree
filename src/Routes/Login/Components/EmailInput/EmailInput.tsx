import * as React from 'react';
import { StyledTextField } from './styles';
import { InputBaseProps } from '@mui/material/InputBase';

interface Props {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  isValid: boolean;
  onBlur?: InputBaseProps['onBlur'];
}

function EmailInput(props: Props) {
  return (
    <StyledTextField
      error={!props.isValid}
      variant={'outlined'}
      label={'Email'}
      helperText={!props.isValid ? 'Incorrect email value.' : undefined}
      value={props.value}
      onChange={props.onChange}
      onBlur={props.onBlur}
    />
  );
}

export default EmailInput;
