import React from "react";
import styled from "styled-components";
import notfound from "../../Assets/404.png";

const Notfound = () => {
  return (
    <Container>
      <Wrap>
        <Image>
          <img src={notfound} />
        </Image>
        <Button>
          <Oopsy>Oops. Looks like you're lost</Oopsy>
          <button>Go Back</button>
        </Button>
      </Wrap>
    </Container>
  );
};

export default Notfound;

const Container = styled.div`
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrap = styled.div`
  width: 90%;
  max-height: 400px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
const Image = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  @media screen and (min-width: 800px) {
    width: 47%;
  }
  img {
    width: 90%;
    height: 100%;
    object-fit: contain;
    object-position: center;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 300px;
  @media screen and (min-width: 800px) {
    width: 47%;
  }
  button {
    padding: 15px 30px;
    border: none;
    outline: none;
  }
`;
const Oopsy = styled.div`
  font-size: 30px;
  text-align: center;
`;
