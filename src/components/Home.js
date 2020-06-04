import  React  from 'react';
import Expense from './Expense_list';
import ExpenseListFilters from './ExpenseListFilters';

const HomePage = () => (
    <div>
        <ExpenseListFilters />
        <Expense />
    </div>
);

export default HomePage;