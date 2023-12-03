// accountSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Load balance from localStorage if available
const loadBalanceFromLocalStorage = () => {
  try {
    const storedBalance = localStorage?.getItem("accountBalance");
    return storedBalance ? parseFloat(storedBalance) : 0;
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return 0;
  }
};

const accountSlice = createSlice({
  name: "account",
  initialState: {
    balance: loadBalanceFromLocalStorage(),
  },
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload;
      localStorage.setItem("accountBalance", action.payload);
    },
    addAmount: (state, action) => {
      state.balance += action.payload;
      localStorage.setItem("accountBalance", state.balance);
    },
    withdrawAmount: (state, action) => {
      state.balance -= action.payload;
      localStorage.setItem("accountBalance", state.balance);
    },
  },
});

export const { setBalance, addAmount, withdrawAmount } = accountSlice.actions;
export const selectBalance = (state) => state.account.balance;
export default accountSlice.reducer;
