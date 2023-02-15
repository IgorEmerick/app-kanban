import { CleanContainer } from '../../../containers/CleanContainer';
import {
  CreateAccountButton,
  CreateAccountContainer,
  Input,
  Label,
  Subtitle,
  Title,
} from './styles';

export function CreateAccount(): JSX.Element {
  return (
    <CleanContainer>
      <CreateAccountContainer>
        <Title>Kanban Board</Title>

        <Subtitle>Create account</Subtitle>

        <Label marginTop="0.4375rem">Name:</Label>

        <Input />

        <Label marginTop="0.875rem">Email:</Label>

        <Input />

        <Label marginTop="0.875rem">Password:</Label>

        <Input type="password" />

        <CreateAccountButton>Create account</CreateAccountButton>
      </CreateAccountContainer>
    </CleanContainer>
  );
}
