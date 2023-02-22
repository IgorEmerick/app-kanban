import axios from 'axios';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { CleanContainer } from '../../../containers/CleanContainer';
import { validateEmail } from '../../../utils/validateEmail';
import { validateName } from '../../../utils/validateName';
import { validatePassword } from '../../../utils/validatePassword';
import {
  CreateAccountButton,
  CreateAccountContainer,
  Input,
  InvalidMessage,
  Label,
  Subtitle,
  Title,
} from './styles';

export function CreateAccount(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validName, setValidName] = useState(true);
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [allowButton, setAllowButton] = useState(false);

  const changeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }, []);

  const changeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }, []);

  const changePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const createAccount = useCallback(async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/user`, {
        email,
        name,
        password,
      });

      Swal.fire('Success!', 'Create user successfuly!', 'success');
    } catch (error: any) {
      Swal.fire(
        `${error.response.status}!`,
        error.response.data.message,
        'error',
      );
    }
  }, [email, name, password]);

  const tryAllowButton = useCallback(() => {
    setAllowButton(
      validateName(name) && validateEmail(email) && validatePassword(password),
    );
  }, [email, name, password]);

  useEffect(() => {
    setValidName(validateName(name));

    tryAllowButton();
  }, [name, tryAllowButton]);

  useEffect(() => {
    setValidEmail(validateEmail(email));

    tryAllowButton();
  }, [email, tryAllowButton]);

  useEffect(() => {
    setValidPassword(validatePassword(password));

    tryAllowButton();
  }, [password, tryAllowButton]);

  return (
    <CleanContainer>
      <CreateAccountContainer>
        <Title>Kanban Board</Title>
        <Subtitle>Create account</Subtitle>

        <Label marginTop="0.4375rem">Name:</Label>
        <Input
          onChange={changeName}
          invalid_content={!validName && name.length > 0}
        />
        <InvalidMessage active={!validName && name.length > 0}>
          * Invalid name
        </InvalidMessage>

        <Label
          marginTop={validName || name.length === 0 ? '0.875rem' : '0.0625rem'}
        >
          Email:
        </Label>
        <Input
          onChange={changeEmail}
          invalid_content={!validEmail && email.length > 0}
        />
        <InvalidMessage active={!validEmail && email.length > 0}>
          * Invalid email
        </InvalidMessage>

        <Label
          marginTop={
            validEmail || email.length === 0 ? '0.875rem' : '0.0625rem'
          }
        >
          Password:
        </Label>
        <Input
          type="password"
          onChange={changePassword}
          invalid_content={!validPassword && password.length > 0}
        />
        <InvalidMessage active={!validPassword && password.length > 0}>
          * Invalid password
        </InvalidMessage>

        <CreateAccountButton
          onClick={createAccount}
          disabled={!allowButton}
          margin_top={
            validPassword || password.length === 0 ? '1.3125rem' : '0.5rem'
          }
        >
          Create account
        </CreateAccountButton>
      </CreateAccountContainer>
    </CleanContainer>
  );
}
