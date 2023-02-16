import { faKeyboard } from '@fortawesome/free-solid-svg-icons/faKeyboard';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faServer } from '@fortawesome/free-solid-svg-icons/faServer';
import { faShieldVirus } from '@fortawesome/free-solid-svg-icons/faShieldVirus';
import { faTv } from '@fortawesome/free-solid-svg-icons/faTv';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import {
  Card,
  Container,
  SectionTitle,
  SubContainer,
  Subtitle,
} from '@/utils/atoms';
import Button from '@/utils/atoms/buttons';
import { LanguageSelector } from '@/utils/context';

const StyledSubContianer = styled(SubContainer)`
  flex-direction: column;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  margin-top: 30px;
`;
const ThisCard = styled(Card)`
  width: calc(33.33% - 20px);

  opacity: ${({ CardsInView }) => (CardsInView ? '1' : '0')};
  transition: box-shadow 0.3s, opacity 0.9s ${({ delay }) => delay};

  &:hover {
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.2);
  }
  & > svg {
    color: ${({ theme }) => theme.colors.primary.main};

    height: 50px;
  }
  & > h4 {
    padding: 20px 0;

    font-size: 25px;
  }
  & > p {
    text-align: center;

    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 15px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;
const StyledButton = styled(Button)`
  margin-top: 30px;
  padding: 10px 20px;
`;

function WhatWeOffer() {
  const [ref, InView] = ElementHasBeenInView(0.3);

  return (
    <Container>
      <StyledSubContianer ref={ref}>
        <SectionTitle>
          {LanguageSelector('ماذا نقدم', 'What we offer')}
        </SectionTitle>
        <Subtitle>
          {LanguageSelector(
            'نقوم بإصلاح أجهزة الكمبيوتر وخوادم الأعمال',
            'We fix computers & business servers'
          )}
        </Subtitle>
        <CardsContainer>
          <ThisCard CardsInView={InView} delay="0.35s">
            <FontAwesomeIcon icon={faLaptop} />
            <h4>{LanguageSelector('حاسوب محمول', 'Laptop')}</h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
            <StyledButton>
              {LanguageSelector('يتعلم أكثر', 'Learn more')}
            </StyledButton>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.2s">
            <FontAwesomeIcon icon={faTv} />
            <h4>{LanguageSelector('كمبيوتر سطح المكتب', 'PC Desktop')}</h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
            <StyledButton>
              {LanguageSelector('يتعلم أكثر', 'Learn more')}
            </StyledButton>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.5s">
            <FontAwesomeIcon icon={faLayerGroup} />
            <h4>{LanguageSelector('البرامج', 'Software')}</h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
            <StyledButton>
              {LanguageSelector('يتعلم أكثر', 'Learn more')}
            </StyledButton>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.05s">
            <FontAwesomeIcon icon={faServer} />
            <h4> {LanguageSelector('نسخ إحتياطي للبيانات', 'Backup Data')} </h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
            <StyledButton>
              {LanguageSelector('يتعلم أكثر', 'Learn more')}
            </StyledButton>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.6s">
            <FontAwesomeIcon icon={faShieldVirus} />
            <h4>{LanguageSelector('مضاد للفيروسات', 'Antivirus')}</h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
            <StyledButton>
              {LanguageSelector('يتعلم أكثر', 'Learn more')}
            </StyledButton>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.5s">
            <FontAwesomeIcon icon={faKeyboard} />
            <h4>{LanguageSelector('قطعة منفصلة', 'Spareparts')}</h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
            <StyledButton>
              {LanguageSelector('يتعلم أكثر', 'Learn more')}
            </StyledButton>
          </ThisCard>
        </CardsContainer>
      </StyledSubContianer>
    </Container>
  );
}

export default WhatWeOffer;
