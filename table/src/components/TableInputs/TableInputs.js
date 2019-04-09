import React from 'react';

import './TableInputs.scss';

class TableInputs extends React.Component {

    state = {
        num1: 10,
        num2: 10
    }

    ChangeNum1 = (e) => {
        let num1 = e.target.value;
        this.setState({ num1 });
        this.props.onChangeNum1(num1)
    } 

    ChangeNum2 = (e) => {
        let num2 = e.target.value;
        this.setState({ num2 });
        this.props.onChangeNum2(num2)
    }

    render() {

        return (
            <div className="wrapper_input">
                <input type="number" min='1' onChange={this.ChangeNum1} value={this.state.num1} />
                <input type="number" min='1' onChange={this.ChangeNum2} value={this.state.num2} />
            </div>
        )
    }
}

export default TableInputs;