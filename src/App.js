import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);

  function onAddExpenseHandler(expense) {
    setExpenses((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  function onChangeExpenseHandler(id) {
    setExpenses((prevExpense) => {
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
