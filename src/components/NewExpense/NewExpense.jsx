import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseDataHandler=(parameterExpenseData) => {
    const fullExpenseData={
      ...parameterExpenseData,
      id:Math.random().toString(),
    }
    props.addExpenseHandler(fullExpenseData);
  }
  return (
    <div className="new-expense">
    <ExpenseForm onSaveExpenseData={expenseDataHandler}/>
    </div>
  );
};

export default NewExpense;
