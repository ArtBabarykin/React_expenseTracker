import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseData = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };
const isEditingHandler = () => setIsEditing(true);
const stopEditingHandler = () => setIsEditing(false);

  return (
    <div className="new-expense">
      <button onClick={isEditingHandler}>Add New Expense</button>
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancelBtn={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
