import React from "react";
import styled from "styled-components";

const CrimePage = () => {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Anti-social behaviour</SectionTitle>
        <SectionImage src="./images/1.webp" />
        <SectionDescription>
          Anti-social behaviour (ASB) covers a wide range of unacceptable
          activity that causes harm to an individual, to their community or to
          their environment.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Bicycle theft</SectionTitle>
        <SectionImage src="./images/2.webp" />
        <SectionDescription>
          Bicycle theft is the crime of stealing a bicycle. It is a common crime
          that is often associated with thefts of other items, such as motor
          vehicles, computers, and personal property.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Burglary</SectionTitle>
        <SectionImage src="./images/3.svg" />
        <SectionDescription>
          Burglary is a crime in which a person enters a building or other
          property with the intent to steal or commit another offence. It is
          often a serious crime, and can result in significant harm to victims.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Criminal damage and arson</SectionTitle>
        <SectionImage src="./images/4.svg" />
        <SectionDescription>
          Criminal damage and arson refer to crimes in which someone damages or
          destroys property, or sets fire to buildings or other structures. These
          crimes can be very serious and can cause significant harm to people and
          communities.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Drugs</SectionTitle>
        <SectionImage src="./images/5.svg" />
        <SectionDescription>
        This refers to the possession, use, or sale of illegal drugs.
        Drug-related crimes can include possession of drugs, drug trafficking, and drug-related violence.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Other crime</SectionTitle>
        <SectionImage src="./images/6.png" />
        <SectionDescription>
        This is a catch-all category for crimes that don't fit into any of the other categories.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Other theft</SectionTitle>
        <SectionImage src="./images/7.svg" />
        <SectionDescription>
        This refers to theft of items other than bicycles or from a person.
         This could include theft of motor vehicles, electronics, jewelry, or other valuable items.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Possession of weapons</SectionTitle>
        <SectionImage src="./images/8.svg" />
        <SectionDescription>
        This refers to the possession of weapons, such as guns or knives,
         without the necessary licenses or permits. It can also include
          possession of other items that could be used as weapons.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Public order</SectionTitle>
        <SectionImage src="./images/9.webp" />
        <SectionDescription>
        This refers to crimes that disrupt the peace
         in public places. This could include disorderly
          conduct, rioting, or other acts that could cause a disturbance.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Robbery</SectionTitle>
        <SectionImage src="./images/10.svg" />
        <SectionDescription>
        This refers to the theft of property from a person
         or business through the use of force or threat of force.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Shoplifting</SectionTitle>
        <SectionImage src="./images/11.png" />
        <SectionDescription>
        This refers to the theft of items from a retail store.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Theft from the person</SectionTitle>
        <SectionImage src="./images/12.png" />
        <SectionDescription>
        This refers to the theft of items directly from a person,
         such as pickpocketing or purse snatching.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Vehicle crime</SectionTitle>
        <SectionImage src="./images/13.svg" />
        <SectionDescription>
        This refers to crimes that involve motor vehicles,
         such as theft of a vehicle or theft from a vehicle.
        </SectionDescription>
      </Section>
      <Section>
        <SectionTitle>Violent crime</SectionTitle>
        <SectionImage src="./images/14.svg" />
        <SectionDescription>
        This refers to crimes that involve the use of force or threat
         of force against a person, such as assault or homicide.
        </SectionDescription>
      </Section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  max-width: 600px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  text-align: justify;
  line-height: 1.5;
`;

export default CrimePage;
