import { combineReducers } from 'redux';

//Reducers

const groceryItemReducer = (totalGroceryList = [], action) => {
    if (action.type === 'GROCERY_ITEM') {
        return {
            groceries: [...totalGroceryList, action.payload.item]
        }
    } else {
        return totalGroceryList;
    }
}

export default combineReducers({ groceryItemReducer });
