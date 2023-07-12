import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  // THE MULTIPLE USESTATE APPROACH FOR STATE CHANGE.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [date, setDate] = useState("");
  const [isFormOpen, setIsFormOpen] = useState(false);

  //THE ONE STATE METHOD FOR STATE CHANGE.
  // const [useInput,setUserInput]=useState({
  //   enteredTitle:'',
  //   enteredAmount:'',
  //   enteredDate:''
  // })

  //A BETTER WAY FOR STATE CHANGE USING USESTATE HOOK.

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //there are two methods by which we can target the state change.
    //1.
    //  setUserInput({
    //   ...useInput,enteredTitle:event.target.value;
    //  });

    //but the previous state change method has some theoretical errors.
    //so the best way is method 2.
    //  setUserInput((prevState)=>{
    //   return ({...prevState,enteredTitle:event.target.value});
    //  })
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault(); //used to prevent the page from reloading.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setDate("");
  };
  const openFormHandler = () => {
    setIsFormOpen(true);
  };
  const closeFormHandler = () => {
    setIsFormOpen(false);
  };
  return (
    <React.Fragment>
      {!isFormOpen && <button onClick={openFormHandler}>Add expense</button>}
      {isFormOpen && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label>Title</label>
              <input
                type="text"
                onChange={titleChangeHandler}
                value={enteredTitle}
              />
            </div>
            <div className="new-expense__control">
              <label>Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label>Date</label>
              <input
                type="date"
                min="2019-01-01"
                value={date}
                onChange={dateChangeHandler}
              />
            </div>
            <div className="new-expense__actions">
              <button onClick={closeFormHandler}>Cancel</button>
              <button type="submit">Add Expense</button>
            </div>
          </div>
        </form>
      )}
    </React.Fragment>
  );
};

export default ExpenseForm;
