import styled from "styled-components";
import H2 from "../../ui/H2";
import FAQItem from "./FAQItem";
import { faqs } from "../../data";
import { useState } from "react";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: var(--padding-primary);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`;

const FAQLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  gap: 20px;
  width: 43%;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  gap: 12px;
`;

const Subtitle = styled.p`
  font-weight: 600;
  line-height: 1.75rem;
  align-self: stretch;
  color: var(--blue-700);
`;

const Intro = styled.p`
  font-size: 22px;
  font-weight: 400;
  line-height: 2rem;
  align-self: stretch;
  color: var(--gray-500);

  span {
    display: unset;
    text-decoration: underline;
    margin-left: 5px;
  }
`;

const FAQContentContainer = styled.div`
  display: flex;
  width: 54%;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

const Accordion = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0px;
`;

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleToggle(index) {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }

  return (
    <Section>
      <Container>
        <FAQLeftContainer>
          <TitleContainer>
            <Subtitle>Support</Subtitle>
            <H2 align="stretch">FAQs</H2>
            <Intro>
              Everything you need to know about the product and billing. Can’t
              find the answer you’re looking for? Please
              <span>chat to our friendly team.</span>
            </Intro>
          </TitleContainer>
        </FAQLeftContainer>

        <FAQContentContainer>
          <Accordion>
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.id}
                title={faq.question}
                onClick={() => handleToggle(i)}
                index={i}
                active={activeIndex}
              >
                {faq.answer}
              </FAQItem>
            ))}
          </Accordion>
        </FAQContentContainer>
      </Container>
    </Section>
  );
}

export default FAQ;
