import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function formDisable() {
    setIsFormOpen(false);
  }
  function formEnable() {
    setIsFormOpen(true);
  }
  function onSaveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: crypto.randomUUID(),
    };
    props.onAddExpense(expenseData);
    setIsFormOpen(false);
  }
  return (
    <div className="new-expense">
      {!isFormOpen && <button onClick={formEnable}>Add New Expense</button>}
      {isFormOpen && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          onCancel={formDisable}
        />
      )}
    </div>
  );
}
export default NewExpense;
