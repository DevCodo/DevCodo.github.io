import React from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';

import './ItemList.scss';

export default class ItemList extends React.Component {

    state = {
        itemList: null
    }

    componentDidMount() {

        const {getDate} = this.props;

        getDate()
            .then( itemList => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map( (item) => {
            const {id} = item;
            const label = this.props.children(item);
            
            return (
                <li className='list-group-item' key={id} onClick={()=> this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
    }

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <Spinner />;
        }

        const items = this.renderItems(itemList);

        return (
            <ul className='item-list list-group'>
               {items}
            </ul>
        )
    }
}