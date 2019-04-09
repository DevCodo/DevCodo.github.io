import React from 'react';

import './Table.scss';

class Table extends React.Component {
    
    createMarkup() {
        let htmlCode = '';

        for (let x = 1; x <= this.props.num2; x++) {
            htmlCode += '<tr>';
            for (let y = 1; y <= this.props.num1; y++) {
                htmlCode += `<td>${ x * y }</td>`
            }
            htmlCode += '</tr>'
        }

        return {__html: htmlCode};
    };

    render() {

        return (
            <table dangerouslySetInnerHTML={this.createMarkup()}></table>            
        )
    }
}

export default Table;


