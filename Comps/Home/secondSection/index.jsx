import { faLayerGroup } from '@fortawesome/free-solid-svg-icons/faLayerGroup';
import { faServer } from '@fortawesome/free-solid-svg-icons/faServer';
import { faShieldVirus } from '@fortawesome/free-solid-svg-icons/faShieldVirus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import { Card, Container, SubContainer } from '@/utils/atoms';
import { LanguageSelector } from '@/utils/context';

const ThisCard = styled(Card)`
  transform: translateY(${({ CardsInView }) => (CardsInView ? '-30%' : '30%')});

  transition: transform 0.9s, opacity 1.9s;
  transition-delay: ${({ delay }) => delay};

  opacity: ${({ CardsInView }) => (CardsInView ? '1' : '0')};

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
`;
const ThisContainer = styled(Container)`
  padding-bottom: 0;
`;

function SecondSection() {
  const [ref, CardsInView] = ElementHasBeenInView(0.3);

  return (
    <ThisContainer>
      <SubContainer ref={ref}>
        <ThisCard CardsInView={CardsInView} delay=".2s">
          <FontAwesomeIcon icon={faServer} />
          <h4>{LanguageSelector('المعدات', 'Hardware')}</h4>
          <p>
            {LanguageSelector(
              `أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن
            الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً
            للتكنولوجيا`,
              'Velit eget ridiculus dolor curabiturauctor nec consequat risus dignissim bibendum tortor'
            )}
          </p>
        </ThisCard>
        <ThisCard CardsInView={CardsInView} delay=".1s">
          <FontAwesomeIcon icon={faLayerGroup} />
          <h4>{LanguageSelector('البرامج', 'Software')}</h4>
          <p>
            {LanguageSelector(
              `أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن
            الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً
            للتكنولوجيا`,
              'Velit eget ridiculus dolor curabiturauctor nec consequat risus dignissim bibendum tortor'
            )}
          </p>
        </ThisCard>
        <ThisCard CardsInView={CardsInView} delay=".3s">
          <FontAwesomeIcon icon={faShieldVirus} />
          <h4>{LanguageSelector('مضاد للفيروسات', 'Antivirus')}</h4>
          <p>
            {LanguageSelector(
              `أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن
            الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً
            للتكنولوجيا`,
              'Velit eget ridiculus dolor curabiturauctor nec consequat risus dignissim bibendum tortor'
            )}
          </p>
        </ThisCard>
      </SubContainer>
    </ThisContainer>
  );
}

export default SecondSection;
