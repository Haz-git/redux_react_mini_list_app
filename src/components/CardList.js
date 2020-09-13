import React from 'react';
import { connect } from 'react-redux';

const CardList = ({ groceries }) => {
    return (
        <div className='ui inverted segment'>
            <div className='ui inverted relaxed divided list'>
                <div className='item'>
                    <div className='content'>
                        <div className='header'>
                            {groceries.map(element => (
                                <li key={element.id}>{element.submitNameValue}</li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        groceries: state.groceries
    }
}

export default connect(mapStateToProps)(CardList);
