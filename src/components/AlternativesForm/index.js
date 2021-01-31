import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.red};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.correct};
        color: ${({ theme }) => theme.colors.contrastText};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.incorrect};
        color: ${({ theme }) => theme.colors.contrastText};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
