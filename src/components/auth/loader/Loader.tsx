import styled, { keyframes } from "styled-components";

const TravelLoader = () => {
  return (
    <Loader>
      <Wrapper>
        <Text>LOADING</Text>
        <Box />
      </Wrapper>
    </Loader>
  );
};

export default TravelLoader;

// 🔸 Animations (copied exactly)
const loading = keyframes`
  0% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(20px);
  }
`;

const loading2 = keyframes`
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(50px);
  }
`;

// 🔸 Styled Components (copied exactly from your CSS)
const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 180px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`;

const Text = styled.div`
  z-index: 3;
  font-family: Whitney, -apple-system, Helvetica, sans-serif;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 20px;
  color: white;
  filter: drop-shadow(2px 2px 0px #ff9e02);
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ef5d2e;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${loading} ease-in-out 0.9s infinite alternate-reverse;

  &::before {
    content: "";
    width: 20px;
    height: 170%;
    background-color: #ff9d0089;
    position: absolute;
    z-index: 1;
    animation: ${loading2} ease-in-out 0.9s infinite alternate-reverse;
  }
`;
  