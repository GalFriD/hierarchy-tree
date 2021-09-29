import React from 'react';
import { Button } from '@mui/material';
import { useState } from 'react';
import { DATA_KEYS } from './types';
import { PasswordInput } from '../PasswordInput';
import { Container } from './styles';
import { EmailInput } from '../EmailInput';

function isDisabled(values: any, validationState: any) {
  return (
    Object.keys(validationState).some((key) => !validationState[key]) ||
    Object.keys(values).some((key) => !values[key])
  );
}
function isEmailValid(value: string) {
  return !!value && /\S+@\S+\.\S+/.test(value);
}

function isPasswordValid(value: string) {
  return !!value;
}

const VALIDATION_MAP = {
  [DATA_KEYS.EMAIL]: isEmailValid,
  [DATA_KEYS.PASSWORD]: isPasswordValid,
};

interface Props {
  onSubmit: (values: any) => Promise<void>;
  isLoading: boolean;
}

function LoginForm(props: Props) {
  const [values, setValues] = useState({
    // [DATA_KEYS.EMAIL]: 'anthony.xiouping@xtreet.tvl',
    // [DATA_KEYS.PASSWORD]: 'mllv9n0x',
    [DATA_KEYS.EMAIL]: '',
    [DATA_KEYS.PASSWORD]: '',
  });
  const [validationState, setValidationState] = useState({
    [DATA_KEYS.EMAIL]: true,
    [DATA_KEYS.PASSWORD]: true,
  });

  const handleChange = (dataKey: string) => (event: any) => {
    setValues({ ...values, [dataKey]: event.target.value });
  };
  const handleBlur = (dataKey: string) => (event: any) => {
    // @ts-ignore
    const validationFunc = VALIDATION_MAP[dataKey];
    if (validationFunc) {
      setValidationState({ ...validationState, [dataKey]: validationFunc(event.target.value) });
    }
  };

  return (
    <Container>
      <div>
        <EmailInput
          value={values[DATA_KEYS.EMAIL]}
          onChange={handleChange(DATA_KEYS.EMAIL)}
          isValid={validationState[DATA_KEYS.EMAIL]}
          onBlur={handleBlur(DATA_KEYS.EMAIL)}
        />
        <PasswordInput
          value={values[DATA_KEYS.PASSWORD]}
          onChange={handleChange(DATA_KEYS.PASSWORD)}
          isValid={validationState[DATA_KEYS.PASSWORD]}
          onBlur={handleBlur(DATA_KEYS.PASSWORD)}
        />
      </div>
      <Button
        disabled={props.isLoading || isDisabled(values, validationState)}
        onClick={() => props.onSubmit(values)}
        variant={'contained'}
      >
        LOG IN
      </Button>
    </Container>
  );
}

export default LoginForm;
