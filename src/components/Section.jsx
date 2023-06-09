import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  const { title, description, leftBtnTxt, rightBtnTxt, backGroundImage } =
    props; //Destructuring or unpacking
  return (
    <Wrap bg={backGroundImage}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      {/* Button group */}
      <Buttons>
        <Fade top>
          <ButtonGroup>
            {leftBtnTxt && <LeftButton>{leftBtnTxt}</LeftButton>}

            {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
          </ButtonGroup>
        </Fade>

        <DownArrow src="./images/down-arrow.svg" />
      </Buttons>{" "}
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  /* background-image: url("/images/model-s.jpg"); */
  /* background-image: ${(props) => `url("/images/${props.bg}")`}; */
  background-image: ${(props) => `url("./images/${props.bg}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  color: white;
  height: 40px;
  width: 200px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
`;
const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown 1.5s infinite;
`;
const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
