import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");
  const filterChangeHandler = (userSelectedYear) => {
    console.log("expense.js");
    setYear(userSelectedYear);
  };

  const fullObjExpense = props.item;

  const filteredExpenses = fullObjExpense.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={year}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
