import React from 'react';
import { connect } from 'react-redux';

const CardList = ({ groceries }) => {
    return (
        <div>
            {groceries.map(element => (
                <li key={element.id}>{element.submitNameValue}</li>
            ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        groceries: state.groceries
    }
}

export default connect(mapStateToProps)(CardList);
