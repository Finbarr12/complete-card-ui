import axios from "axios";
import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";
import pic from "../../.././Images/trancard.svg";
import { creatingCard } from "../../../Global/ReduxState";
import { UseAppDispatch, useAppSelector } from "../../../Global/Store";

const CreateCard = () => {
  const business = useAppSelector((state) => state.bizClient);
  const dispatch = UseAppDispatch();
  const URl = "https://giftcard-api.onrender.com";

  const [colour, setColour] = React.useState("");
  const [moneyWorth, setMoneyWorth] = React.useState<any>(0);

  const postCard = async () => {
    // e.preventDefault();

    await axios
      .post(`${URl}/api/generateyourgiftcard/${business?._id}`, {
        moneyWorth: moneyWorth,
        colour,
      })
      .then((res) => {
        // console.log("this is res", res.data.data);

        dispatch(creatingCard(res.data.data));
        Swal.fire({
          title: "Gift cards created successfully!",
          //  html: "redirecting to login",
        });
      })
      .catch((err) => {
        console.log(`this is err from axios ${err}`);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Update>
          <Circle>
            <Img src={business?.logo === "" ? pic : business?.logo} />
          </Circle>
        </Update>
        <Form>
          <Name>{business?.name}</Name>

          <Inp
            onChange={(e) => {
              setMoneyWorth(e.target.value);
            }}
            value={moneyWorth}
            placeholder="Amount"
            type="number"
          />
          <Col>
            <Choose>Select Color</Choose>
            <Color
              onChange={(e) => {
                setColour(e.target.value);
              }}
              type="color"
            />
          </Col>
          {moneyWorth <= 0 || colour === "" ? (
            <Button2 bg="silver" cp="not-allowed">
              Create Card
            </Button2>
          ) : (
            <Button2 onClick={postCard} bg="blueviolet" cp="pointer">
              Create Card
            </Button2>
          )}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default CreateCard;

const Name = styled.h3`
  border: none;
  outline: none;
  width: calc(100% - 20px);
  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
  margin: 0;
  display: flex;
  align-items: center;
  font-weight: 500;
`;

const Col = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Choose = styled.div`
  color: #919191;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 50%;
`;

const Button2 = styled.button<{ bg: string; cp: string }>`
  height: 40px;
  width: 150px;
  background-color: ${(props) => props.bg};
  color: white;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: all 350ms;
  cursor: ${(props) => props.cp};
  margin-top: 10px;
  :hover {
    transform: scale(0.95);
  }
  @media screen and (max-width: 500px) {
    width: 120px;
  }
`;

const Select = styled.select`
  border: none;
  outline: none;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
  option {
    border: none;
    outline: none;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    height: 50px;
    border-radius: 10px;
    font-size: 16px;
    background-color: #ececec92;
  }
`;

const Inp = styled.input`
  border: none;
  outline: none;
  width: calc(100% - 20px);
  padding-left: 20px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #ececec92;
`;

const Color = styled.input`
  border: none;
  outline: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ececec92;
`;

const Input = styled.input`
  display: none;
`;
const Button = styled.label`
  height: 40px;
  width: 200px;
  background-color: blueviolet;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  transition: all 350ms;
  cursor: pointer;
  :hover {
    transform: scale(0.98);
  }
`;

const Circle = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  /* border-radius: 50%; */
  background-color: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  flex-direction: column;
  font-size: 30px;

  span {
    font-size: 12px;
  }
`;

const Update = styled.div`
  display: flex;
  gap: 30px;
  width: 100%;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #dfdedef8;
`;
const Wrapper = styled.div``;

const Container = styled.div`
  width: 70%;
  margin-top: 20px;

  margin-left: 20px;
`;
