//Action Creators

//Returns objects with a type and payload:
//Let's do a grocery list:

export const groceryListCreator = (payload) => {
    return {
        type: 'GROCERY_ITEM',
        payload: payload,
    }
}



