"use client";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectBalance } from "../../redux/slice";

const CardContainerMain = styled.div`
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #766b81;
  width: 100%;
  text-align: center;
  margin: 25px 0 0 0;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  font-size: 2rem;
  color: #333;
`;

const User = () => {
  const balance = useSelector(selectBalance);

  return (
    <CardContainerMain>
      <CardContainer>
        <CardTitle>Account Balance</CardTitle>
        <CardContent> ₹{balance}</CardContent>
      </CardContainer>
    </CardContainerMain>
  );
};

export default User;
