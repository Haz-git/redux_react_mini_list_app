import React from 'react';

const Input = () => {
    return (
        <div className='ui form'>
            <div className='field'>
                <label>Grocery Item</label>
                <input type='text'></input>
            </div>
            <div className='ui right labeled input'>
                <label for='Amount' class='ui label'>$</label>
                <input type='text' placeholder='Amount' id='amount'></input>
                <div className='ui basic label'>.00</div>
            </div>
            <div>
                <button className='ui primary button'>
                    Submit
                </button>
                <button className='ui button'>
                    Discard
                </button>
            </div>
        </div>
    )
}

export default Input;