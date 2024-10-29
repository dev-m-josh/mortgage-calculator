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
    const monthlyTotal = monthly.toFixed(2)

    setMonthlyPayment(monthlyTotal);
    //total payment
    const RepaymentAmount = monthlyTotal * 12;
    setTotalRepayment(RepaymentAmount.toFixed(2));
  };


  return (
    <>
    <div className='calculation'>
      <div className='heading'>
      <h1>Mortgage Calculator</h1>
      <a>Clear All</a>
      </div>
      <div className='mortgage-input'>
        <h3>Mortgage Amount</h3>
        <div className='input-bar'>
          <p style={{width:'30px', backgroundColor: 'hsl(61, 70%, 52%)'}}>$</p>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />
        </div>
      </div>
      <div className='term'>
        <div className='mortgage-input'>
        <h3>Mortgage Term</h3>
        <div className='input-bar'>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
          />
          <p>years</p>
        </div>
        </div>
        <div className='mortgage-input'>
          <h3>Interest Rate</h3>
          <div className='input-bar'>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
            <p>%</p>
          </div>
        </div>
      </div>
      <div className='repayment'>
      <h3>Mortgage Type</h3>
      <div className='types'>
        <input type="radio" />
        <p>Repayment</p>
      </div>
      <div className='types'>
        <input type="radio" />
        <p>Interest Only</p>
      </div>
      </div>
      <button className='calculate' onClick={calculateMortgage} disabled={!loanAmount || !interestRate || !loanTerm}>Calculate Repayments</button>
    </div>
    <div className='result'>
        <h2>Your results</h2>
        <p>Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
        <div className='amount'>
          {monthlyPayment && <p>Your monthly payment: <h2>${monthlyPayment}</h2></p>}
          {totalRepayment && <p>Total you'll repay over the term: <h3>${totalRepayment}</h3></p>}
        </div>
    </div>
    </>
  );
};

export default Calculator;
