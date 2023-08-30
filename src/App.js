import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const [expenses, setExpense] = useState([]);
  function onAddExpenseHandler(expense) {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }
  function onChangeExpenseHandler(id) {
    setExpense((prevExpense) => {
      return prevExpense.filter((expense) => {
        return expense.id !== id;
      });
    });
  }
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHandler} />
      <Expenses onChangeExpense={onChangeExpenseHandler} expense={expenses} />
    </div>
  );
}

export default App;
