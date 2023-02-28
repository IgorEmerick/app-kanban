import axios from 'axios';
import { ChangeEvent, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { defaultSwal } from '../../../components/defaultSwal';
import { CleanContainer } from '../../../containers/CleanContainer';
import { validateEmail } from '../../../utils/validateEmail';
import {
  Input,
  Label,
  LoginLink,
  LoginButton,
  LoginContainer,
  LoginTitle,
  ErrorMessage,
} from './styles';

export function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [invalidAuthentication, setInvalidAuthentication] = useState(false);

  const navigate = useNavigate();

  const changeEmail = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);

      setValidEmail(validateEmail(event.target.value));

      if (invalidAuthentication) {
        setInvalidAuthentication(false);
      }
    },
    [invalidAuthentication],
  );

  const changePassword = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);

      setValidPassword(event.target.value.length >= 8);

      if (invalidAuthentication) {
        setInvalidAuthentication(false);
      }
    },
    [invalidAuthentication],
  );

  const authenticate = useCallback(async () => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/authenticate`,
        { email, password },
      );

      localStorage.setItem('auth_token', data.token);
    } catch (error: any) {
      if (error.response.status === 401) {
        setInvalidAuthentication(true);

        return;
      }

      defaultSwal.fire(
        `${error.response.status}!`,
        error.response.data.message,
        'error',
      );
    }
  }, [email, password]);

  const redirectToCreateAccount = useCallback(() => {
    navigate('/create-account', { replace: true });
  }, [navigate]);

  return (
    <CleanContainer>
      <LoginContainer>
        <LoginTitle>Kanban Board</LoginTitle>

        <Label margin_top="2.5625rem">Email:</Label>
        <Input onChange={changeEmail} invalid={invalidAuthentication} />

        <Label margin_top="0.875rem">Password:</Label>
        <Input
          onChange={changePassword}
          invalid={invalidAuthentication}
          type="password"
        />

        <ErrorMessage active={invalidAuthentication}>
          * Invalid email or password!
        </ErrorMessage>

        <LoginButton
          disabled={!validEmail || !validPassword}
          onClick={authenticate}
          invalid={invalidAuthentication}
        >
          Log In
        </LoginButton>

        <LoginLink onClick={redirectToCreateAccount}>create account</LoginLink>
      </LoginContainer>
    </CleanContainer>
  );
}
