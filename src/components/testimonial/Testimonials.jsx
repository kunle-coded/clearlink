import styled from "styled-components";
import Spotify from "../brands/Spotify";
import StarRating from "../icons/StarRating";
import Arrows from "../icons/Arrows";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: var(--padding-secondary);
  background: var(--gray-50);
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
  width: 100%;
  padding: 0px 32px;
`;
const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  flex: 1 0 0;
`;
const RightContainer = styled.div`
  /* display: flex; */
  height: 496px;
  flex: 1 0 0;
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  justify-items: center;
  align-items: end;
  gap: 20px;
`;

const ImageWrapperBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
  margin-top: 20px;
`;

const Image = styled.img`
  flex-shrink: 0;
  background-size: cover;
  background-repeat: no-repeat;
  justify-self: ${(props) => props.justify};
`;

const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
const H3 = styled.h3`
  font-size: var(--font-lg);
  font-weight: 500;
  line-height: 3.2rem;
  letter-spacing: -0.88px;
  color: var(--gray-900);
  align-self: stretch;
`;

const AttributionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
`;
const AvatarContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1 0 0;
`;

const Avatar = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 200px;
  background: url("/assets/avatar5.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const AvatarTexts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  flex: 1 0 0;
`;

const AttributionName = styled.p`
  color: var(--gray-900);
  font-size: var(--font-sm);
  font-weight: 600;
  line-height: 1.8rem;
  align-self: stretch;
`;
const AttributionRole = styled.p`
  color: var(--gray-600);
  font-size: var(--font-regular);
  font-weight: 400;
  line-height: 1.7rem;
  align-self: stretch;
`;

const ArrowsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 32px;
`;
const ArrowWrapper = styled.div`
  display: flex;
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 28px;
  border: 1px solid var(--blue-100);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
`;

function Testimonials() {
  return (
    <Section>
      <Container>
        <LeftContainer>
          <Spotify width="112" height="32" />
          <RatingContainer>
            <StarRating count={5} />
          </RatingContainer>
          <H3>
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </H3>
          <AttributionContainer>
            <AvatarContainer>
              <Avatar></Avatar>
              <AvatarTexts>
                <AttributionName>Sarah Thompson</AttributionName>
                <AttributionRole>Project Manager, Shopify</AttributionRole>
              </AvatarTexts>
            </AvatarContainer>
            <ArrowsContainer>
              <ArrowWrapper>
                <Arrows />
              </ArrowWrapper>
              <ArrowWrapper>
                <Arrows type="right" />
              </ArrowWrapper>
            </ArrowsContainer>
          </AttributionContainer>
        </LeftContainer>
        <RightContainer>
          <ImageWrapper>
            <Image justify="right" src="/assets/image5.png" />
            <Image justify="left" src="/assets/image1.png" />
          </ImageWrapper>
          <ImageWrapperBottom>
            <Image src="/assets/image3.png" />
            <Image src="/assets/image4.png" />
            <Image src="/assets/image2.png" />
          </ImageWrapperBottom>
        </RightContainer>
      </Container>
    </Section>
  );
}

export default Testimonials;
