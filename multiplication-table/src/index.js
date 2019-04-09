import React from 'react';
import ReactDOM from 'react-dom';

import Table from './components/Table/Table';
import TableInputs from './components/TableInputs/TableInputs';

import './scss/main.scss'

class App extends React.Component {

    state = {
        num1: 10,
        num2: 10
    }

    onChangeNum1 = (num1) => {
        this.setState({ num1 })
    }

    onChangeNum2 = (num2) => {
        this.setState({ num2 })
    }

    render() {
        
        return (
            <div className='container'>
                <h1>Таблица умножения</h1>
                <TableInputs onChangeNum1={this.onChangeNum1} onChangeNum2={this.onChangeNum2}/>
                <Table num1={this.state.num1} num2={this.state.num2}/>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));
