import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { useState } from 'react';
import * as React from 'react';
import { StyledOutlinedInput } from './styles';
import { InputBaseProps } from '@mui/material/InputBase';

interface Props {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  isValid: boolean;
  onBlur?: InputBaseProps['onBlur'];
}

function PasswordInput(props: Props) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <StyledOutlinedInput
      error={!props.isValid}
      variant={'outlined'}
      helperText={!props.isValid ? 'Password cannot be empty.' : undefined}
      onBlur={props.onBlur}
      label="Password"
      value={props.value}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      onChange={props.onChange}
    />
  );
}

export default PasswordInput;
