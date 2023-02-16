import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faLifeRing } from '@fortawesome/free-solid-svg-icons/faLifeRing';
import { faMessage } from '@fortawesome/free-solid-svg-icons/faMessage';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faPhone } from '@fortawesome/free-solid-svg-icons/faPhone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import { Card, Container, SubContainer } from '@/utils/atoms';
import Button from '@/utils/atoms/buttons';
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
const StyledButton = styled(Button)`
  margin-top: 20px;
  padding: 10px 20px;

  font-size: 15px;

  & > svg {
    ${({ rtl }) => (rtl ? 'padding-left: 10px' : 'padding-right: 10px')};
  }
`;

function NinthSection() {
  const [ref, CardsInView] = ElementHasBeenInView(0.3);
  const rtl = LanguageSelector(true);

  return (
    <ThisContainer>
      <SubContainer ref={ref}>
        <ThisCard CardsInView={CardsInView} delay=".2s">
          <FontAwesomeIcon icon={faMessage} />
          <h4>{LanguageSelector('استشارات', 'Consultations')}</h4>
          <p>
            {LanguageSelector(
              `أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن
            الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً
            للتكنولوجيا`,
              'Velit eget ridiculus dolor curabiturauctor nec consequat risus dignissim bibendum tortor'
            )}
          </p>
          <StyledButton rtl={rtl}>
            <FontAwesomeIcon icon={faWhatsapp} />
            {LanguageSelector('الدردشة الآن', 'Chat Now')}
          </StyledButton>
        </ThisCard>
        <ThisCard CardsInView={CardsInView} delay=".1s">
          <FontAwesomeIcon icon={faFile} />
          <h4>{LanguageSelector('دعم التذاكر', ' Ticket Support ')}</h4>
          <p>
            {LanguageSelector(
              `أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن
            الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً
            للتكنولوجيا`,
              'Velit eget ridiculus dolor curabiturauctor nec consequat risus dignissim bibendum tortor'
            )}
          </p>
          <StyledButton rtl={rtl}>
            <FontAwesomeIcon icon={faPaperPlane} />
            {LanguageSelector('إرسال التذكرة', 'Send Ticket')}
          </StyledButton>
        </ThisCard>
        <ThisCard CardsInView={CardsInView} delay=".3s">
          <FontAwesomeIcon icon={faLifeRing} />
          <h4>{LanguageSelector('دعم العملاء', ' Customer Support ')}</h4>
          <p>
            {LanguageSelector(
              `أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن
            الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً
            للتكنولوجيا`,
              'Velit eget ridiculus dolor curabiturauctor nec consequat risus dignissim bibendum tortor'
            )}
          </p>
          <StyledButton rtl={rtl}>
            <FontAwesomeIcon icon={faPhone} />
            {LanguageSelector('اتصل بنا', '	Call us')}
          </StyledButton>
        </ThisCard>
      </SubContainer>
    </ThisContainer>
  );
}

export default NinthSection;
