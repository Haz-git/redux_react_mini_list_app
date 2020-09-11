//Action Creators

//Returns objects with a type and payload:
//Let's do a grocery list:

const groceryListCreator = (item, amount) => {
    return {
        type: 'GROCERY_ITEM',
        payload: {
            item: item,
            amount: amount,
        }
    }
}

