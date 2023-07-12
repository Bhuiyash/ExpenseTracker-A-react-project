import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if(props.items.length===0){
    return <h2 className="expenses-list__fallback">No expenses found!</h2>
  }


  return <ul className="expenses-list">
    {
      props.items.map(
        (
          i //i is the iterator hoding the object/element.
        ) => (
          <ExpenseItem
            key={i.id}
            title={i.title}
            date={i.date}
            amount={i.amount}
          />
        )
      )
    }
  </ul>;
};

export default ExpensesList;
