import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  { id:'e1', title: "Car Insurance", date: new Date(2023, 5, 2), amount: 50 },
  { id:'e2', title: "Food expense", date: new Date(2023, 3, 8), amount: 100 },
  { id:'e3', title: "Laundry", date: new Date(2023, 10, 3), amount: 30 },
  { id:'e4', title: "Smart Card", date: new Date(2023, 4, 26), amount: 50 },
];
const App = () => {
  
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const expenseDataInApp=(finalExpenseData)=>{
    console.log(" final data locked in app");
    setExpenses((prevState) => {
      return [finalExpenseData,...prevState];
    });
 
  }
  return (
    <div>
      <NewExpense addExpenseHandler={expenseDataInApp}/>
     <Expenses item={expenses}/>
    </div>
  );
};

export default App;
