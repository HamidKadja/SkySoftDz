import { memo, useEffect, useState } from 'react';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import { Card, Container, SubContainer } from '@/utils/atoms';
import BlockWithCounter from '@/utils/atoms/blockWithCounter';
import { LanguageSelector } from '@/utils/context';

const ThisCard = styled(Card)`
  flex-direction: row;
  justify-content: center;

  width: 100%;

  transform: translateY(${({ CardInView }) => (CardInView ? '-30%' : '30%')});

  transition: transform 0.9s, opacity 1.9s;
  transition-delay: ${({ delay }) => delay};

  opacity: ${({ CardInView }) => (CardInView ? '1' : '0')};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-wrap: wrap;
  }
`;
const ThisContainer = styled(Container)`
  padding-bottom: 0;
`;

function CounterSection() {
  const [ref, CardInView] = ElementHasBeenInView(0.3);

  const [counterEnd, setCounterEnd] = useState({
    block1: 0,
    block2: 0,
    block3: 0,
    block4: 0,
  });

  useEffect(() => {
    if (CardInView)
      setCounterEnd({
        block1: 14,
        block2: 4,
        block3: 25,
        block4: 10,
      });
  }, [CardInView]);

  return (
    <ThisContainer>
      <SubContainer ref={ref}>
        <ThisCard CardInView={CardInView} delay=".2s">
          <BlockWithCounter
            counterEnd={counterEnd.block1}
            suffix="K+"
            text={LanguageSelector('عملاء سعداء', 'Happy clients')}
          />
          <BlockWithCounter
            counterEnd={counterEnd.block2}
            suffix="K+"
            text={LanguageSelector('أعضاء نشطون', 'Members Active')}
          />
          <BlockWithCounter
            counterEnd={counterEnd.block3}
            suffix="+"
            text={LanguageSelector('خبراء معتمدين', 'Certified Experts')}
          />
          <BlockWithCounter
            counterEnd={counterEnd.block4}
            suffix="+"
            text={LanguageSelector('سنوات خبرة', 'Years Experience')}
          />
        </ThisCard>
      </SubContainer>
    </ThisContainer>
  );
}

export default memo(CounterSection);
