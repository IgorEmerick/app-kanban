import { CleanContainer } from '../../../containers/CleanContainer';
import { CreateAccountContainer, Subtitle, Title } from './styles';

export function CreateAccount(): JSX.Element {
  return (
    <CleanContainer>
      <CreateAccountContainer>
        <Title>Kanban Board</Title>
        <Subtitle>Create account</Subtitle>
      </CreateAccountContainer>
    </CleanContainer>
  );
}
