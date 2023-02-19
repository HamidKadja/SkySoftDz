import { faLightbulb } from '@fortawesome/free-solid-svg-icons/faLightbulb';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons/faScrewdriverWrench';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import styled from 'styled-components';

import { SectionTitle, SubContainer, Subtitle } from '@/utils/atoms';
import { LanguageSelector } from '@/utils/context';

const Container = styled.section`
  position: relative;
`;
const StyledSubContainer = styled(SubContainer)`
  margin: 150px 0px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    flex-direction: column;
  }
`;
const OverlayContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  background-image: radial-gradient(at top right, #3bfbc32b 0%, #008bc5 92%);
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${({ rtl }) => (rtl ? 'padding-left:20px' : 'padding-right:20px')};

  transition: opacity 2s;

  & > p {
    padding: ${({ rtl }) =>
      rtl ? '10px 0px 50px 15px' : '10px 15px 50px 0px'};

    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 20px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100%;
  }
`;
const StyledSectionTitle = styled(SectionTitle)`
  color: ${({ theme }) => theme.colors.secondary.main};
`;
const StyledSubtitle = styled(Subtitle)`
  color: ${({ theme }) => theme.colors.secondary.main};

  text-align: start;

  font-size: 60px;
`;
const CardContainer = styled.div`
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    flex-direction: column;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 290px;
  margin: 10px;
  padding: 30px;
  border: solid 1px ${({ theme }) => theme.colors.secondary.main}60;
  border-radius: 10px;

  color: ${({ theme }) => theme.colors.secondary.main};

  text-align: center;
  line-height: 25px;

  & > span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 70px;
    height: 70px;

    background-color: ${({ theme }) => theme.colors.secondary.main};

    color: ${({ theme }) => theme.colors.primary.main};

    & > svg {
      height: 35px;
    }
  }

  & > h4 {
    margin: 20px 0px;
    text-transform: capitalize;

    font-size: 25px;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.large}px) {
    width: 100%;
  }
`;

function OurValue() {
  return (
    <Container>
      <Image
        fill
        src="/the-master-checks-a-broken-laptop-with-a-multimeter.webp"
        alt="the-master-checks-a-broken-laptop-with-a-multimeter"
        style={{ objectFit: 'cover' }}
      />

      <OverlayContainer>
        <StyledSubContainer>
          <TextContainer>
            <StyledSectionTitle>
              {LanguageSelector('قيمتنا', 'our value')}
            </StyledSectionTitle>
            <StyledSubtitle>
              {LanguageSelector(
                'الطريقة الذكية لإصلاح أجهزة الكمبيوتر',
                'The smart way to fix computers'
              )}
            </StyledSubtitle>
            <p>
              {LanguageSelector(
                'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل الجديد للمشروع الجديد، ',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
              )}
            </p>
          </TextContainer>

          <CardContainer>
            <Card>
              <span>
                <FontAwesomeIcon icon={faLightbulb} />
              </span>
              <h4>{LanguageSelector('رؤية', 'vision')}</h4>
              <p>
                {LanguageSelector(
                  'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل',
                  'Velit eget ridiculus dolor curabitur auctor nec consequat risus dignissim bibendum tortor'
                )}
              </p>
            </Card>
            <Card>
              <span>
                <FontAwesomeIcon icon={faScrewdriverWrench} />
              </span>
              <h4>{LanguageSelector('المهمة', 'Mission')}</h4>
              <p>
                {LanguageSelector(
                  'توصيف عرض عصب بنيوي خلف الطريق المختلط، ولكن على حد سواء كان سعيداً أو عائلة.توصل الى تعدد الألوان والشكل',
                  'Velit eget ridiculus dolor curabitur auctor nec consequat risus dignissim bibendum tortor'
                )}
              </p>
            </Card>
          </CardContainer>
        </StyledSubContainer>
      </OverlayContainer>
    </Container>
  );
}

export default OurValue;
