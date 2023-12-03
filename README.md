create an app using Next js version 13.
used style-component for styling components.
redux-toolkit with localStorage.

Account Balance:
Display the user's current account balance prominently on the dashboard for quick and easy access.

Deposit Money:
Users can deposit money by selecting from denominations of Rs. 100, Rs. 500, Rs. 1000, or Rs. 2000.
A user-friendly interface allows users to enter the number of notes they wish to deposit for each denomination.
Upon confirmation, the application updates the account balance accordingly.

Withdraw Money:
Users can initiate a withdrawal by entering the desired amount.
The application performs validation to ensure the requested amount is available in the account balance.
In case of insufficient funds, an error message is displayed.
If the requested amount is valid, the application calculates and dispenses the minimum number of notes (Rs. 2000, Rs. 1000, Rs. 500, and Rs. 100) required to meet the withdrawal amount.
The account balance is then updated based on the successful withdrawal.

commands for run the project
1. npm i
2. npm run dev
   
