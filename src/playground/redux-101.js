import { createStore } from 'redux';

//Action generators --> functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({  
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy 
});
const setCount = ({count }) => ({
    type: 'SET',
    count
});
const reset = () => ({
    type: 'RESET',
});


//Reducers
//Reducers are pure functions -->
//1) output determined by input
//2) Never change state or action

const countReducer = (state = { count: 0 }, action)  => {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count+ action.incrementBy
            };
        case "DECREMENT": 
            return {
                count: state.count- action.decrementBy
            };
        case "SET": 
            return {
                count: action.count
            };    
        case "RESET": 
            return {
                count: 0
            };        
        default:
            return state;
    }
};

const store = createStore(countReducer());


//Before constReducer
// const store = createStore((state = { count: 0 }, action)  => {
//     switch(action.type) {
//         case "INCREMENT":
//             return {
//                 count: state.count+ action.incrementBy
//             };
//         case "DECREMENT": 
//             return {
//                 count: state.count- action.decrementBy
//             };
//         case "SET": 
//             return {
//                 count: action.count
//             };    
//         case "RESET": 
//             return {
//                 count: 0
//             };        
//         default:
//             return state;
//     }
// });

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Action - Object that gets sent to the store
//object describes type of action required on store
//various Actions  -- increment, decrement,reset

//increment count
//store.dispatch allows to send action object to store 

// store.dispatch ({
//     type: 'INCREMENT',
//     incrementBy: 5
// }); 

store.dispatch(incrementCount({incrementBy: 5}))

//unsubscribe();
//Ignores values after this function

// store.dispatch ({
//     type: 'INCREMENT'
// });
store.dispatch(incrementCount());

store.dispatch (reset());

store.dispatch (decrementCount());

store.dispatch (decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));