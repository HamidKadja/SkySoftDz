import Image from 'next/image';
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
  position: relative;

  width: calc(33.33% - 20px);
  height: 525px;

  opacity: ${({ CardsInView }) => (CardsInView ? '1' : '0')};

  transition: box-shadow 0.3s, opacity 0.9s ${({ delay }) => delay};

  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background-color: #000000a0;

    transition: background-color 0.3s;
  }

  & > img {
    transition: transform 0.3s;
  }
  &:hover {
    box-shadow: 0px 30px 60px 0px rgba(0, 0, 0, 0.2);

    &:before {
      background-color: #00000060;
    }
    & > img {
      transform: scale(1.2);
    }
  }

  & > div {
    position: relative;
    z-index: 2;

    margin-top: auto;

    color: ${({ theme }) => theme.colors.secondary.main};

    & > h4 {
      padding: 20px 0;

      font-size: 25px;
    }
    & > p {
      text-align: start;

      font-size: 15px;
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    width: 100%;
  }
`;
const StyledButton = styled(Button)`
  margin-top: 30px;
  padding: 10px 20px;
`;

function LatestProject() {
  const [ref, InView] = ElementHasBeenInView(0.2);

  return (
    <Container>
      <StyledSubContianer ref={ref}>
        <SectionTitle>
          {LanguageSelector('أحدث المشاريع', 'Latest Project')}
        </SectionTitle>
        <Subtitle>
          {LanguageSelector('مشاريعنا الرائعة', 'Our Awesome Projects')}
        </Subtitle>
        <CardsContainer>
          <ThisCard CardsInView={InView} delay="0.35s">
            <Image
              fill
              src="/the-master-checks-a-broken-laptop-with-a-multimeter.webp"
              alt="the-master-checks-a-broken-laptop-with-a-multimeter"
              sizes="(max-width: 767px) 100vw, 33.33vw"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <h4>{LanguageSelector('متجر', 'Lokamart Store')}</h4>
              <p>
                {LanguageSelector(
                  'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                  'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
                )}
              </p>
              <StyledButton>
                {LanguageSelector('تعلم أكثر', 'Learn more')}
              </StyledButton>
            </div>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <Image
              fill
              src="/creating-code-for-computer-software.webp"
              alt="creating-code-for-computer-software"
              sizes="(max-width: 767px) 100vw, 33.33vw"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <h4>
                {LanguageSelector(
                  'البنية التحتية لمكتب',
                  'Makko Office Infrastructure'
                )}
              </h4>
              <p>
                {LanguageSelector(
                  'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                  'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
                )}
              </p>
              <StyledButton>
                {LanguageSelector('تعلم أكثر', 'Learn more')}
              </StyledButton>
            </div>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <Image
              fill
              src="/young-male-computer-technician-repairing-cable-on-office-desk.webp"
              alt="young-male-computer-technician-repairing-cable-on-office-desk"
              sizes="(max-width: 767px) 100vw, 33.33vw"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <h4>
                {LanguageSelector(
                  'بيانات النسخ الاحتياطي لوكاس مدونة فيديو',
                  'Backup Data Lukas Vlogger'
                )}
              </h4>
              <p>
                {LanguageSelector(
                  'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                  'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
                )}
              </p>
              <StyledButton>
                {LanguageSelector('تعلم أكثر', 'Learn more')}
              </StyledButton>
            </div>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <Image
              fill
              src="/ransom-ware-cyber-attack-warning-message-on-a-computer-screen-woman-work-with-a-laptop-.webp"
              alt="ransom-ware-cyber-attack-warning-message-on-a-computer-screen-woman-work-with-a-laptop-"
              sizes="(max-width: 767px) 100vw, 33.33vw"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <h4>
                {LanguageSelector(
                  'إزالة الفيروسات خوادم مستشفى سانتا ماريا',
                  'Virus Removal Santa Maria Hospital Servers'
                )}
              </h4>
              <p>
                {LanguageSelector(
                  'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                  'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
                )}
              </p>
              <StyledButton>
                {LanguageSelector('تعلم أكثر', 'Learn more')}
              </StyledButton>
            </div>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <Image
              fill
              src="/two-young-successful-technicians-in-gloves-and-uniform-working-by-desk.webp"
              alt="two-young-successful-technicians-in-gloves-and-uniform-working-by-desk"
              sizes="(max-width: 767px) 100vw, 33.33vw"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <h4>
                {LanguageSelector(
                  'شركة صيانه كمبيوتر مكتبي الكتروني',
                  'Maintenance Desktop PC Electrodeals Company'
                )}
              </h4>
              <p>
                {LanguageSelector(
                  'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                  'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
                )}
              </p>
              <StyledButton>
                {LanguageSelector('تعلم أكثر', 'Learn more')}
              </StyledButton>
            </div>
          </ThisCard>

          <ThisCard CardsInView={InView} delay="0.35s">
            <Image
              fill
              src="/diverse-male-and-female-engineers-discussing-over-a-laptop-in-computer-server-room.webp"
              alt="diverse-male-and-female-engineers-discussing-over-a-laptop-in-computer-server-room"
              sizes="(max-width: 767px) 100vw, 33.33vw"
              style={{ objectFit: 'cover' }}
            />
            <div>
              <h4>
                {LanguageSelector(
                  'صيانة خوادم الإنترنت',
                  'Maintenance Internet Indowebster Servers'
                )}
              </h4>
              <p>
                {LanguageSelector(
                  'أزعج برد أثناء تناول الطعام في المطعم، ولكن سرعان ما تحدثت عن الأخبار الجديدة والمشاريع الجديدة. وقد أصبح العالم متزعماً للتكنولوجيا',
                  'Scelerisque tempor magnis vehicula pharetra eu justo dis donec dignissim rutrum bibendum'
                )}
              </p>
              <StyledButton>
                {LanguageSelector('تعلم أكثر', 'Learn more')}
              </StyledButton>
            </div>
          </ThisCard>
        </CardsContainer>
      </StyledSubContianer>
    </Container>
  );
}

export default LatestProject;
