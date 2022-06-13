import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2022");

  const saveSelectedYearHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSaveSelectedYear={saveSelectedYearHandler}
          selected={selectedYear}
        />
       <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
