import axios from 'axios';
import { ChangeEvent, useCallback, useState } from 'react';
import Swal from 'sweetalert2';
import { CleanContainer } from '../../../containers/CleanContainer';
import { validateEmail } from '../../../utils/validateEmail';
import { validateName } from '../../../utils/validateName';
import { validatePassword } from '../../../utils/validatePassword';
import {
  CreateAccountButton,
  CreateAccountContainer,
  Input,
  Label,
  Subtitle,
  Title,
} from './styles';

export function CreateAccount(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);

  const changeName = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);

    setValidName(validateName(event.target.value));
  }, []);

  const changeEmail = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    setValidEmail(validateEmail(event.target.value));
  }, []);

  const changePassword = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    setValidPassword(validatePassword(event.target.value));
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

  return (
    <CleanContainer>
      <CreateAccountContainer>
        <Title>Kanban Board</Title>

        <Subtitle>Create account</Subtitle>

        <Label marginTop="0.4375rem">Name:</Label>

        <Input onChange={changeName} />

        <Label marginTop="0.875rem">Email:</Label>

        <Input onChange={changeEmail} />

        <Label marginTop="0.875rem">Password:</Label>

        <Input type="password" onChange={changePassword} />

        <CreateAccountButton
          onClick={createAccount}
          disabled={!validName || !validEmail || !validPassword}
        >
          Create account
        </CreateAccountButton>
      </CreateAccountContainer>
    </CleanContainer>
  );
}
