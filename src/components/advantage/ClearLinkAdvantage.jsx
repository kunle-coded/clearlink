import styled from "styled-components";
import H2 from "../../ui/H2";
import HandDrawnArrow from "../icons/HandDrawnArrow";
import VideoRecorder from "../icons/VideoRecorder";
import Recording from "../icons/Recording";
import Calender from "../icons/Calender";
import LockUnlocked from "../icons/LockUnlocked";

const Section = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;
  padding: var(--padding-primary);
  width: 100%;
  position: relative;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
`;
const HeadingTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;

const HeadingSubtitle = styled.p`
  font-size: var(--font-regular);
  font-size: 18px;
  font-weight: 600;
  line-height: 1.75rem;
  color: var(--blue-700);
`;

const HeadingText = styled.p`
  font-size: var(--font-md);
  color: var(--gray-500);
  font-weight: 400;
  line-height: 2rem;
  width: 60%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ContentInnerLeft = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 55%;
  gap: 60px 40px;
  flex-shrink: 0;
  flex-wrap: wrap;
`;

const FeaturedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const FeaturedIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  background: var(--gray-50);
`;
const FeaturedTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
const FeaturedTitle = styled.p`
  font-size: var(--font-md);
  font-weight: 600;
  line-height: 2rem;
  color: var(--gray-900);
`;
const FeaturedText = styled.p`
  font-size: var(--font-regular);
  font-weight: 400;
  line-height: 1.75rem;
  color: var(--gray-600);
`;

const ImageWrapper = styled.div`
  /* width: 444px;
  height: 427px; */
  width: 494px;
  height: 477px;
  flex-shrink: 0;
  background: url("../../src/assets/advantage-image.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ArrowWrapper = styled.div`
  position: absolute;
  right: 281.415px;
  top: 136px;
`;

function ClearLinkAdvantage() {
  return (
    <Section>
      <HeadingContainer>
        <HeadingTitle>
          <HeadingSubtitle>The ClearLink Advantage</HeadingSubtitle>
          <H2>Why choose ClearLink?</H2>
        </HeadingTitle>
        <HeadingText>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </HeadingText>
      </HeadingContainer>

      <ContentContainer>
        <ContentInnerLeft>
          <FeaturedContainer>
            <FeaturedIcon>
              <VideoRecorder />
            </FeaturedIcon>
            <FeaturedTextWrapper>
              <FeaturedTitle>Crystal-clear HD video</FeaturedTitle>
              <FeaturedText>
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </FeaturedText>
            </FeaturedTextWrapper>
          </FeaturedContainer>

          <FeaturedContainer>
            <FeaturedIcon>
              <Recording />
            </FeaturedIcon>
            <FeaturedTextWrapper>
              <FeaturedTitle>Noise-canceling audio</FeaturedTitle>
              <FeaturedText>
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </FeaturedText>
            </FeaturedTextWrapper>
          </FeaturedContainer>
          <FeaturedContainer>
            <FeaturedIcon>
              <Calender />
            </FeaturedIcon>
            <FeaturedTextWrapper>
              <FeaturedTitle>Scheduling made easy</FeaturedTitle>
              <FeaturedText>
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </FeaturedText>
            </FeaturedTextWrapper>
          </FeaturedContainer>
          <FeaturedContainer>
            <FeaturedIcon>
              <LockUnlocked />
            </FeaturedIcon>
            <FeaturedTextWrapper>
              <FeaturedTitle>Bank-grade security</FeaturedTitle>
              <FeaturedText>
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </FeaturedText>
            </FeaturedTextWrapper>
          </FeaturedContainer>
        </ContentInnerLeft>

        <ImageWrapper></ImageWrapper>
      </ContentContainer>
      <ArrowWrapper>
        <HandDrawnArrow />
      </ArrowWrapper>
    </Section>
  );
}

export default ClearLinkAdvantage;
