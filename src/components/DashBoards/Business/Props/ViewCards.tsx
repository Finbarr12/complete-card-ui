import React from "react";
import styled from "styled-components";
import pic from "../../.././Images/trancard.svg";
import Card from "../Props/Cards";
import { FaWallet } from "react-icons/fa";
import { useAppSelector } from "../../../Global/Store";
import { useQuery } from "@tanstack/react-query";
import { singleBusiness } from "../../../API/Endpoint";

const ViewCards = () => {
  const dummy = [{ card: "One" }, { card: "Two" }];

  const user = useAppSelector((state) => state.bizClient);

  console.log("this is card data", user);

  const oneCard = useQuery({
    queryKey: ["singleCardss", user?._id],
    queryFn: () => {
      return singleBusiness(user?._id);
    },
  });

  // console.log("one card", oneCard.data?.data?.data.giftCard);
  const cardData = oneCard.data?.data;
  console.log("this is cardDAta", cardData);

  return (
    <div>
      {dummy.length === 0 ? (
        <Nothing>
          <CenterHold>
            <Pic>
              <img src={pic} />
            </Pic>
            <Txt>No Withdrawals Yet!</Txt>
            <Sxt>
              This place is empty because you haven't made any withdrawal 😒
            </Sxt>
          </CenterHold>
        </Nothing>
      ) : (
        <div>
          <CardContainer>
            {/* {oneCard.isLoading ? <p>Cards Loading...</p> : null} */}
            {dummy?.map((props: any) => (
              <Card
                key={props._id}
                pic={<FaWallet />}
                busyname="eaSports"
                amount={10}
                colour="#a30080"
                code="889pbja"
              />
            ))}
          </CardContainer>
        </div>
      )}
    </div>
  );
};

export default ViewCards;

const Container = styled.div``;
const CardContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
`;
const Nothing = styled.div`
  width: 100%;
  height: calc(100vh - 205px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CenterHold = styled.div`
  color: lightgray;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Pic = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 200px;
  height: 200px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    border-radius: 50%;
  }
`;
const Txt = styled.div`
  font-size: 16px;
  color: gray;
  font-weight: bold;
`;
const Sxt = styled.div`
  font-size: 14px;
  max-width: 250px;
  color: #9c9c9c;
`;
