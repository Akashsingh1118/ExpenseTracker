import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  function onDeleteExpenseHandler(id) {
    props.onModifyExpense(id);
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          {...item}
          id={item.id}
          onDeleteExpense={onDeleteExpenseHandler}
        />
      ))}
    </ul>
  );
}
export default ExpensesList;
