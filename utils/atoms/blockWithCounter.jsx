import { memo } from 'react';
import CountUp from 'react-countup';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 25%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 50%;
    padding: 15px;
  }
`;
const Number = styled.span`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 30px;
  font-weight: bold;
`;
const Text = styled.p`
  text-align: center;

  color: ${({ theme }) => theme.colors.tertiary.second_shade};
  font-size: 15px;
`;

function BlockWithCounter({ counterEnd, suffix = '', text }) {
  return (
    <Container dir="ltr">
      <CountUp
        start={0}
        end={counterEnd}
        duration={3}
        decimals={0}
        separator={' '}
        suffix={suffix}
      >
        {({ countUpRef }) => (
          <div>
            <Number ref={countUpRef} />
          </div>
        )}
      </CountUp>
      <Text>{text}</Text>
    </Container>
  );
}

export default memo(BlockWithCounter);
