import styled from 'styled-components';

export const CreateAccountContainer = styled.div`
  width: 20rem;
  height: 24rem;
  margin: auto;
  border-radius: 0.625rem;
  background-color: #d9d9d9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.625rem;
  color: #798d77;
`;

export const Subtitle = styled.span`
  margin-top: 0.5rem;

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: #798d77;
`;

interface ILabelProps {
  marginTop: string;
}

export const Label = styled.label<ILabelProps>`
  width: 17.5rem;
  height: 1.625rem;
  margin-top: ${props => props.marginTop};

  align-items: center;

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: #042e00;
`;

interface IInputProps {
  invalid_content: boolean;
}

export const Input = styled.input<IInputProps>`
  width: 17.5rem;
  height: 1.5rem;
  margin-top: 0.625rem;
  border: 0.0625rem solid
    ${props => (props.invalid_content ? '#FF0000' : '#546053')};
  border-radius: 0.3125rem;
  background-color: #ffffff;

  align-items: center;

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: #042900;
`;

interface IInvalidMessageProps {
  active: boolean;
}

export const InvalidMessage = styled.span<IInvalidMessageProps>`
  width: 17.5rem;
  height: 0.8125rem;

  display: ${props => (props.active ? 'flex' : 'none')};
  justify-content: flex-start;
  align-items: center;

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.8125rem;
  color: #ff0000;
`;

interface ICreateAccountButtonProps {
  margin_top: string;
}

export const CreateAccountButton = styled.button<ICreateAccountButtonProps>`
  width: 6.875rem;
  height: 1.875rem;
  margin-top: ${props => props.margin_top};
  border: none;
  border-radius: 0.3125rem;
  background-color: ${props => (props.disabled ? '#BAFAB3' : '#043300')};

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  color: ${props => (props.disabled ? '#043300' : '#BAFAB3')};

  :hover {
    cursor: pointer;
  }
`;
