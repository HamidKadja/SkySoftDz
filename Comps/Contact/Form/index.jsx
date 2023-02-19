import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

import ElementHasBeenInView from '@/utils/Hooks/ElementHAsBeenInView';
import { Card, Container, SubContainer } from '@/utils/atoms';
import Button from '@/utils/atoms/buttons';
import { LanguageSelector } from '@/utils/context';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 50%;

  transform: ${({ rtl, InView }) =>
    InView ? 'translateX(0)' : rtl ? 'translateX(200%)' : 'translateX(-200%)'};
  transition: transform 0.9s;

  & > h6 {
    padding: 10px 0px;
    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 17.5px;
  }

  & > h2 {
    padding: 10px 0px;
    color: ${({ theme }) => theme.colors.tertiary.main};
    font-size: 50px;
  }

  & > p {
    padding: ${({ rtl }) =>
      rtl ? '10px 0px 50px 15px' : '10px 15px 50px 0px'};

    color: ${({ theme }) => theme.colors.tertiary.second_shade};
    font-size: 16.5px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;
const FormContainer = styled(Card)`
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;

  width: 50%;
  padding: 50px 25px;

  transform: ${({ rtl, InView }) =>
    InView ? 'translateX(0)' : rtl ? 'translateX(-200%)' : 'translateX(200%)'};
  transition: transform 0.9s;

  & > h3 {
    width: 100%;

    font-size: 30px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
    margin: 40px 0px;
  }
`;
const Input50 = styled.input`
  width: calc(50% - 10px);
  height: 47px;
  ${({ margin }) => margin && `margin-inline-end:auto`};
  margin-top: 15px;
  border: none;
  border-bottom: 0.5px solid #00000060;

  font-size: 20px;

  transition: border 0.3s;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.first_shade};

    outline: none;
  }
`;
const Input100 = styled(Input50)`
  width: 100%;
`;
const MessaqeInput = styled.textarea`
  width: 100%;
  height: 200px;
  margin-top: 15px;
  border: none;
  border-bottom: 0.5px solid #00000060;

  font-size: 20px;

  transition: border 0.3s;
  resize: vertical;

  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.first_shade};

    outline: none;
  }
`;
const StyledMessage = styled(Button)`
  width: 100%;
  margin-top: 20px;
  padding: 10px;

  & > svg {
    margin-inline-end: 20px;
  }
`;

function SendAMessage() {
  const [ref, InView] = ElementHasBeenInView(0.3);
  const rtl = LanguageSelector(true);

  return (
    <Container>
      <SubContainer ref={ref}>
        <TextContainer InView={InView} rtl={rtl}>
          <h6>{LanguageSelector('ارسل رسالة', 'Send a message')}</h6>
          <h2>
            {LanguageSelector(
              'لنبدأ التحدث مع موظفينا لمساعدتك.',
              "Let's start talking with our staff to help you."
            )}
          </h2>
          <p>
            {LanguageSelector(
              'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ولكن على الرغم من ذلك كل شيء كان مؤثراً وأهم من ذلك الرغبة في التغيير. تخطط أولاً للبحث عن الحلول الأخرى وتطويرها بشكل مستمر.',
              'Dictumst fringilla urna curabitur nam ornare risus hac feugiat libero ut. Metus justo quis velit eu elementum gravida natoque ac. Aliquam si sagittis morbi sapien urna tristique curae fusce himenaeos ultrices dui.'
            )}
          </p>
        </TextContainer>
        <FormContainer rtl={rtl} InView={InView}>
          <h3>
            {LanguageSelector(
              'يرجى ملء النموذج أدناه',
              'Please fill out the form below'
            )}
          </h3>
          <Input50
            width
            margin
            placeholder={LanguageSelector('الإسم', 'Name')}
          />
          <Input50 placeholder={LanguageSelector('رقم الهاتف', 'Phone')} />
          <Input100
            placeholder={LanguageSelector('البريد الإلكتروني', 'E-Mail')}
          />
          <Input100 placeholder={LanguageSelector('الموضوع', 'Subject')} />
          <MessaqeInput placeholder={LanguageSelector('الرسالة', 'Message')} />
          <StyledMessage>
            <FontAwesomeIcon icon={faEnvelope} />
            {LanguageSelector('إبعث رسالة', 'Send Message')}
          </StyledMessage>
        </FormContainer>
      </SubContainer>
    </Container>
  );
}

export default SendAMessage;
