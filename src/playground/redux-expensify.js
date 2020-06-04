import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 1000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

//store for filterReducer
//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(100));
const demoState = () => {
    expenses: [{
        id: 'testid',
        description: 'Jan Rent',
        note: 'This was final Payment',
        amount: 54500,
        createdAt: 0
    }];
    filters: {
        text: 'rent';
        sortBy: 'amount';
        startDate: undefined;
        endDate: undefined
    }
};



//Object Spread Operator

const user = {
    name: 'GGS',
    age: 26
}

// console.log({
//     ...user,
//     location: 'India',
//     age: 27
// });