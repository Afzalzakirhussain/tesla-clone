import React from "react";
import styled from "styled-components";
import Section from "./Section";
import carInfo from "./carInfo";
function Home() {
  return (
    <>
      <Container>
        {carInfo.map((item) => (
          <Section
            key={item.id}
            title={item.title}
            description={item.description}
            backGroundImage={item.image}
            leftBtnTxt="Custom Order"
            rightBtnTxt="Existing Inventory"
          />
        ))}
        <Section
          title="Lowest cost Solar panels in America"
          description="Money-back guarantee"
          backGroundImage="solar-panel.jpg"
          leftBtnTxt="Order Now"
          rightBtnTxt="Learn more"
        />
        <Section
          title="Solar for New Roofs"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backGroundImage="solar-roof.jpg"
          leftBtnTxt="Order Now"
          rightBtnTxt="Learn more"
        />
        <Section
          title="Accessories"
          description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          backGroundImage="accessories.jpg"
          leftBtnTxt="Shop now"
          rightBtnTxt=""
        />
      </Container>
    </>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
