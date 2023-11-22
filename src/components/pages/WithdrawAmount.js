"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBalance, withdrawAmount } from "../../redux/slice";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  gap: 7%;
`;

const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  width: 18rem;
`;

const WithdrawButton = styled.button`
  margin-top: 9px;
  padding: 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 18rem;
`;

const WithdrawAmount = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const [selectedDenomination, setSelectedDenomination] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  const handleWithdrawAmount = () => {
    const amountToWithdraw = Number(selectedDenomination);

    if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
      setErrorMessage("Please select a valid denomination.");
      return;
    }

    if (amountToWithdraw > balance) {
      setErrorMessage(
        "Insufficient funds. Cannot withdraw more than the available balance."
      );
      return;
    }

    dispatch(withdrawAmount(amountToWithdraw));

    // Update localStorage with the new balance
    localStorage.setItem("accountBalance", balance - amountToWithdraw);
    setSelectedDenomination(0);
    // Reset withdrawalAmount state and error message
    setErrorMessage("");
  };
  return (
    <div>
      <Main>
        <label htmlFor="denomination">Select Amount </label>
        <StyledSelect
          id="denomination"
          value={selectedDenomination}
          onChange={(e) => setSelectedDenomination(Number(e.target.value))}
        >
          <option value={0}>₹ 0</option>
          <option value={2000}>₹ 2000</option>
          <option value={500}>₹ 500</option>
          <option value={200}>₹ 200</option>
          <option value={100}>₹ 100</option>
        </StyledSelect>
        <WithdrawButton onClick={handleWithdrawAmount}>
          Withdraw Amount
        </WithdrawButton>
      </Main>
      {errorMessage && (
        <p style={{ color: "red", marginTop: "20px" }}>{errorMessage}</p>
      )}
    </div>
  );
};

export default WithdrawAmount;
