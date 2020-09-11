import { combineReducers } from 'redux';

//Reducers

const groceryItemReducer(existingGroceryList = [], action) {
    if (action.type === 'GROCERY_ITEM') {
        return action.payload;
    } else {
        return existingGroceryList;
    }
}

export default combineReducers({ groceryItemReducer });
