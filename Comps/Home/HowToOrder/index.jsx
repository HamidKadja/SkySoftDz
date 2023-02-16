import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard';
import { faLaptop } from '@fortawesome/free-solid-svg-icons/faLaptop';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
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
import { LanguageSelector } from '@/utils/context';

const StyledContainer = styled(Container)`
  background-color: ${({ theme }) => theme.colors.secondary.first_shade};
`;
const StyledSubContianer = styled(SubContainer)`
  flex-direction: column;
`;

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  width: 100%;
  margin-top: 30px;
`;
const ThisCard = styled(Card)`
  position: relative;

  width: calc(25% - 20px);

  transform: ${({ CardsInView, rtl }) =>
    CardsInView
      ? 'translateX(0)'
      : rtl
      ? 'translateX(100%)'
      : 'translateX(-100%)'};
  transition: box-shadow 0.3s, opacity 0.9s ${({ delay }) => delay},
    transform 0.9s;

  opacity: ${({ CardsInView }) => (CardsInView ? '1' : '0')};

  &:hover {
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.2);
  }
  & > svg {
    color: ${({ theme }) => theme.colors.primary.main};

    height: 50px;
  }
  & > h4 {
    padding: 20px 0;

    text-align: center;

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
const DotedLines = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;

  width: calc(100% - 20px);

  border-top: dashed 2.5px ${({ theme }) => theme.colors.tertiary.second_shade};

  transform: translate(-50%, -50%);
`;

function HowToOrder() {
  const [ref, InView] = ElementHasBeenInView(0.3);
  const rtl = LanguageSelector(true);

  return (
    <StyledContainer>
      <StyledSubContianer ref={ref}>
        <SectionTitle>
          {LanguageSelector('كيف تطلب', 'How to order')}
        </SectionTitle>
        <Subtitle>
          {LanguageSelector(
            'خطوة سهلة للحصول على الخدمات',
            'Easy step for getting the services'
          )}
        </Subtitle>
        <CardsContainer>
          <DotedLines />
          <ThisCard CardsInView={InView} delay="0.35s" rtl={rtl}>
            <FontAwesomeIcon icon={faMessage} />
            <h4>{LanguageSelector('استشارات', 'Consultations')}</h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s" rtl={rtl}>
            <FontAwesomeIcon icon={faClipboard} />
            <h4>{LanguageSelector('اختر الباقة', ' Choose Package ')}</h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s" rtl={rtl}>
            <FontAwesomeIcon icon={faLaptop} />
            <h4>
              {LanguageSelector(
                'جهاز الكمبيوتر الخاص بك بالفعل الخدمة',
                'Your PC already service '
              )}
            </h4>
            <p>
              {LanguageSelector(
                'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
              )}
            </p>
          </ThisCard>
        </CardsContainer>
      </StyledSubContianer>
    </StyledContainer>
  );
}

export default HowToOrder;
