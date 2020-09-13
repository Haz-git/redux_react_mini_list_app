import React, { useState } from 'react';
import { connect } from 'react-redux';
import { groceryListCreator } from '../actions';

const Input = ({ groceryListCreator }) => {

    const [ submitNameValue, setSubmitNameValue ] = useState('');
    // const [ submitAmountValue, setSubmitAmountValue ] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitNameValue(event.target.value);
        console.log(submitNameValue);
        groceryListCreator({submitNameValue});
        setSubmitNameValue('');
    }

    return (
        <form onSubmit={e => handleSubmit(e)}>
            <div className='ui form'>
                <div className='field'>
                    <label>Grocery Item</label>
                    <input value={submitNameValue} type='text' onChange={(e) => setSubmitNameValue(e.target.value)}></input>
                </div>
                {/* <div className='ui right labeled input'>
                    <label className='ui label'>$</label>
                    <input type='number' placeholder='Amount' onChange={(e) => setSubmitAmountValue(e.target.value)}></input>
                    <div className='ui basic label'>.00</div>
                </div> */}
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
        groceryListCreator: grocery => dispatch(groceryListCreator(grocery))
    }
}

export default connect(null, mapDispatchToProps)(Input);