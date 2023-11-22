"use client";
import AddAmount from "./AddAmount";
import User from "./User";
import WithdrawAmount from "./WithdrawAmount";
import styled from "styled-components";

const MainDiv = styled.div`
  margin: 20px;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  gap: 4%;
`;

const Heading = styled.h2`
  text-align: center;
  margin: 50px 0 0 0;
`;

export default function MainComp() {
  return (
    <MainDiv>
      <AddAmount />
      <Heading> Withdraw Amount</Heading>
      <Main>
        <WithdrawAmount />
        <User />
      </Main>
    </MainDiv>
  );
}
