import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { CleanContainer } from '../../../containers/CleanContainer';
import {
  Input,
  Label,
  LoginLink,
  LoginButton,
  LoginContainer,
  LoginTitle,
} from './styles';

export function Login(): JSX.Element {
  const navigate = useNavigate();

  const redirectToCreateAccount = useCallback(() => {
    navigate('/create-account', { replace: true });
  }, [navigate]);

  return (
    <CleanContainer>
      <LoginContainer>
        <LoginTitle>Kanban Board</LoginTitle>

        <Label margin_top="2.5625rem">Email:</Label>
        <Input />

        <Label margin_top="0.875rem">Password:</Label>
        <Input />

        <LoginButton>Log In</LoginButton>

        <LoginLink onClick={redirectToCreateAccount}>create account</LoginLink>
      </LoginContainer>
    </CleanContainer>
  );
}
