import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  function onClickHandler() {
    props.onDeleteExpense(props.id);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
        <button className="delete-expense" onClick={onClickHandler}>
          Delete
        </button>
      </div>
    </Card>
  );
}
export default ExpenseItem;
