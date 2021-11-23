import React from 'react';
import './App.css';
import Header from "./UI/components/Header/Header";
import Routing from './Routing';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routing/>
        </div>
    );
}

export default App;
