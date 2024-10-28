// src/Calculator.js
import React, { useState } from 'react';
import './App.css';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [totalRepayment, setTotalRepayment] = useState(null);


  const calculateMortgage = () => {
    //convert into a number
    const principal = parseFloat(loanAmount); //the loan
    const interest = parseFloat(interestRate) / 100 / 12; //monthly interest
    const payments = parseInt(loanTerm) * 12; //months to repay mortgage

    const x = Math.pow(1 + interest, payments); //exponentiation 
    const monthly = (principal * x * interest) / (x - 1); //get monthly repayment

    setMonthlyPayment(monthly.toFixed(2));
    //total payment
    const totalRepaymentAmt = monthlyPayment * 12;
    setTotalRepayment(totalRepaymentAmt.toFixed(2));

  };

  return (
    <>
    <div>
      <h1>Mortgage Calculator</h1>
      <div className='input'>
      <h3>Mortgage Amount</h3>
      <input
        type="number"
        placeholder="Loan Amount"
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      </div>
      <div className='term'>
      <div className='input'>
      <h3>Mortgage Term</h3>
      <input
        type="number"
        placeholder="Loan Term (years)"
        value={loanTerm}
        onChange={(e) => setLoanTerm(e.target.value)}
      />
      </div>
      <div className='input'>
      <h3>Interest Rate</h3>
      <input
        type="number"
        placeholder="Annual Interest Rate (%)"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />
      </div>
      </div>
      <div className='repayment'>
      <h3>Mortgage Type</h3>
      <div className='types'>
        <input type="checkbox" />
        <p>Repayment</p>
      </div>
      <div className='types'>
        <input type="checkbox" />
        <p>Interest Only</p>
      </div>
      </div>
      <button onClick={calculateMortgage} disabled={!loanAmount || !interestRate || !loanTerm}>Calculate Repayments</button>
    </div>
    <div>
    {monthlyPayment && <h2>Monthly Payment: ${monthlyPayment}</h2>}
    {totalRepayment && <h2>Total Repayment: ${totalRepayment}</h2>}
    </div>
    </>
  );
};

export default Calculator;
