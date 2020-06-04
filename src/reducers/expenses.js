//...state takes all current items and adds items after that
//Expenses Reducer
const expensesReducerDeaultState = [];

const expensesReducer = (state = expensesReducerDeaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE': 
            return state.filter(({ id }) => id !== action.id);   
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                }else {
                    return expense;
                };  
            });
        default: 
            return state;
    }
};


export default expensesReducer;