import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Fade from "react-reveal/Fade";

function Header() {
  const [bugerControl, setbugerControl] = useState(false);

  return (
    <Container>
      <Fade left>
        <a>
          <img src="/images/logo.svg" alt="TESLA" />
        </a>
      </Fade>
      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>
 <a href="#">Afzal</a>
        <a href="#">Model X</a>

        <a href="#">Model Y</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setbugerControl(true)} />
      </RightMenu>

      <BurgerNav controlsts={bugerControl}>
        <CloseWrapper>
          <CustomCloseIcon onClick={() => setbugerControl(false)} />
        </CloseWrapper>{" "}
        <li>
          <a href="#">Model S</a>
        </li>
        <li>
          <a href="#">Model 3</a>
        </li>
        <li>
          <a href="#">Model X</a>
        </li>
        <li>
          <a href="#">Model Y</a>
        </li>
        <li>
          <a href="#">Existing inventory</a>
        </li>
        <li>
          <a href="#">Used inventory</a>
        </li>
        <li>
          <a href="#">Trade in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  justify-content: space-between;
  background-color: rgba(256, 256, 256, 0.005);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  transform: ${(props) =>
    props.controlsts ? "translatex(0)" : "translatex(100%)"};
  transition: transform 0.5s cubic-bezier(0.65, 0.05, 0.36, 1) 0s;
  padding: 20px;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;
const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
