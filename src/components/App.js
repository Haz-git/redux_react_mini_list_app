import React from 'react';
import Input from './Input';
import CardList from './CardList';

const App = () => {
    return (
        <div>
            <div>
                <h1>Grocery List App</h1>
            </div>
            <div>
                <Input />
            </div>
            <div>
                <CardList />
            </div>
        </div>
    )
}

export default App;