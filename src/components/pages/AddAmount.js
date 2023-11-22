"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAmount } from "../../redux/slice";
import { selectBalance } from "../../redux/slice";
import styled from "styled-components";

const Heading = styled.h2`
  text-align: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  gap: 4%;
`;

const TableContainer = styled.div`
  max-width: 600px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const Th = styled.th`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
  background-color: #3a3636;
  color: #fff;
`;

const Td = styled.td`
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
`;

const StyledInput = styled.input`
  padding: 8px;
`;

const TotalAmount = styled.div`
  margin-top: 20px;
  font-weight: bold;
`;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #766b81;
  text-align: center;
  height: fit-content;
  margin: 51px 0 0 0;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 8px;
`;

const CardContent = styled.p`
  font-size: 2rem;
  color: #333;
`;

const DepositButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AddAmount = () => {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const [denominations, setDenominations] = useState({
    2000: 0,
    500: 0,
    200: 0,
    100: 0,
  });

  const handleCountChange = (denomination, count) => {
    setDenominations({
      ...denominations,
      [denomination]: count,
    });
  };

  const calculateAmount = (denomination, count) => {
    const amount = denomination * count;
    return isNaN(amount) ? "₹0" : `₹${amount}`;
  };

  const calculateTotalAmount = () => {
    const totalAmount = Object.entries(denominations).reduce(
      (total, [denomination, count]) => {
        const amount = denomination * count;
        return isNaN(amount) ? total : total + amount;
      },
      0
    );

    return isNaN(totalAmount) ? 0 : totalAmount;
  };

  const handleAddAmount = () => {
    // Filter out entries with a count of 0
    const filteredDenominations = Object.fromEntries(
      Object.entries(denominations).filter(([_, count]) => count !== 0)
    );

    const amountToAdd = calculateTotalAmount(filteredDenominations);
    if (isNaN(amountToAdd) || amountToAdd <= 0) {
      // Handle invalid input
      return;
    }

    // Add the specified amount
    dispatch(addAmount(Number(amountToAdd)));

    // Update localStorage with the new balance
    localStorage.setItem("accountBalance", balance + amountToAdd);

    // Reset additionAmount state
    setDenominations({
      2000: 0,
      500: 0,
      200: 0,
      100: 0,
    });
  };

  return (
    <div>
      <Heading>Deposite Component</Heading>
      <Main>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <Th>Denomination</Th>
                <Th>Count</Th>
                <Th>Amount</Th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(denominations).map(([denomination, count]) => (
                <tr key={denomination}>
                  <Td>{denomination}</Td>
                  <Td>
                    <StyledInput
                      type="number"
                      min={0}
                      value={count}
                      onChange={(e) =>
                        handleCountChange(
                          denomination,
                          parseInt(e.target.value, 10)
                        )
                      }
                    />
                  </Td>
                  <Td>{calculateAmount(parseInt(denomination), count)}</Td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
        <div>
          <CardContainer>
            <CardTitle>Total Amount</CardTitle>
            <CardContent> ₹{calculateTotalAmount()}</CardContent>
          </CardContainer>
          <DepositButton onClick={handleAddAmount}>
            Deposite Amount
          </DepositButton>
        </div>
      </Main>
    </div>
  );
};

export default AddAmount;
