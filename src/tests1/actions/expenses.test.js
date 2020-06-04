import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should set up remove expense object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

//test case for editExpense 
test('Setup for editExpense', () => {
    const action = editExpense('123abc', { note: 'New Note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note'
        }
    });
});

//test case for add Expense
test('Should set up add expense object with values', ()=> {
    const expenseData = {
        description: 'Rent',
        amount: 100,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Set up add expense with default values', ()=> {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            amount: 0,
            createdAt: 0,
            note:'',
            id: expect.any(String)
        }
    });
});