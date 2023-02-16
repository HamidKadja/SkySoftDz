/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 10px;
  padding: 25px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.secondary.main};

  box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.1);
`;
export const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: center;

  padding-bottom: 80px;
`;
export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: ${({ theme }) => theme.variables.maxWidth}px;
  padding: 0px 20px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;
export const SectionTitle = styled.h6`
  padding: 20px 0px;

  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.tertiary.second_shade};
  font-size: 17px;
`;
export const Subtitle = styled.h2`
  max-width: 656px;

  text-align: center;

  color: ${({ theme }) => theme.colors.tertiary.main};
  font-size: 40px;
`;
export const Main = styled.main`
  overflow-x: hidden;
`;
