import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 20rem;
  height: 21.5625rem;
  margin: auto;
  border-radius: 0.625rem;
  background-color: #d9d9d9;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.span`
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.625rem;
  color: #798d77;
`;

interface ILabelProps {
  margin_top: string;
}

export const Label = styled.label<ILabelProps>`
  width: 17.5rem;
  margin-top: ${props => props.margin_top};

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;
  color: #042e00;
`;

export const Input = styled.input`
  width: 17.5rem;
  height: 1.5rem;
  margin-top: 0.625rem;
  border: 0.0625rem solid #546053;
  border-radius: 0.3125rem;
  background-color: #ffffff;

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;
  color: #042900;
`;

export const LoginButton = styled.button`
  width: 6.25rem;
  height: 1.875rem;
  margin-top: 1.3125rem;
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
  color: ${props => (props.disabled ? '#043300' : '#bafab3')};
`;

export const LoginLink = styled.span`
  margin-top: 1.1875rem;

  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1rem;
  text-decoration-line: underline;
  color: #064800;

  :hover {
    cursor: pointer;
  }
`;
