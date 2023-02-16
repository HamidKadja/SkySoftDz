import styled from 'styled-components';

export default styled.button`
  width: fit-content;
  padding: 20px 40px;
  border: none;
  border-radius: 30px;

  background-color: ${({ theme }) => theme.colors.primary.first_shade};

  font-size: 20px;

  transition: color 0.3s, background-color 0.3s;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary.first_shade};

    color: ${({ theme }) => theme.colors.secondary.main};
  }
`;
