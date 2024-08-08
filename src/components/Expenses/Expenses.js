import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseList(props) {
  const [filteredYear, setFilteredYear] = useState("2024");

  function onYearFilterHandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

  const filteredExpense = props.expense.filter((item) => {
    return item.date.getFullYear().toString() === filteredYear;
  });

  function onModifyExpenseHandler(id) {
    props.onChangeExpense(id);
  }

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter
          defaultYear={filteredYear}
          onYearFilter={onYearFilterHandler}
        />
        <ExpensesChart filteredExpense={filteredExpense} />
        <ExpensesList
          items={filteredExpense}
          onModifyExpense={onModifyExpenseHandler}
        />
      </Card>
    </li>
  );
}
export default ExpenseList;
