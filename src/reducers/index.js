

//Reducers

const initialState = {
    groceries: []
}

const groceryItemReducer = (state = initialState, action) => {
    if (action.type === 'GROCERY_ITEM') {
        return Object.assign({}, state, {
            groceries: state.groceries.concat(action.payload)
        });
    }

    return state;
}

export default groceryItemReducer;
