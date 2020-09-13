import React, { useState } from 'react';
import { connect } from 'react-redux';
import { groceryListCreator } from '../actions';

const Input = ({ groceryListCreatorAction }) => {

    const [ submitNameValue, setSubmitNameValue ] = useState('');
    const [ submitAmountValue, setSubmitAmountValue ] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(submitNameValue);
        console.log(submitAmountValue);
        groceryListCreatorAction({ submitNameValue, submitAmountValue });
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className='ui form'>
                <div className='field'>
                    <label>Grocery Item</label>
                    <input type='text' onChange={(e) => setSubmitNameValue(e.target.value)}></input>
                </div>
                <div className='ui right labeled input'>
                    <label className='ui label'>$</label>
                    <input type='number' placeholder='Amount' onChange={(e) => setSubmitAmountValue(e.target.value)}></input>
                    <div className='ui basic label'>.00</div>
                </div>
                <div>
                    <button type='submit' className='ui primary button'>
                        Submit
                    </button>
                    <button type='reset' className='ui button'>
                        Discard
                    </button>
                </div>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        groceryListCreatorAction: (name, amount) => dispatch(groceryListCreator(name, amount))
    }
}

export default connect(null, mapDispatchToProps)(Input);