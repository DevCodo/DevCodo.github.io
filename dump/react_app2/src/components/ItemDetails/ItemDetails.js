import React from 'react';

import SwapiService from '../../services/SwapiService';
import Spinner from '../Spinner';
import ErrorButton from '../ErrorButton';

import './ItemDetails.scss';

const Record = ({ item, field, label }) => {
    return (
        <li className='list-group-item'>
            <span className='term'>{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export { Record };

export default class ItemDetails extends React.Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        image: null
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updatePerson();
        }
    }

    updatePerson() {
        const { itemId, getData, getImageUrl } = this.props;
        if (!itemId) {
            return;
        }
        this.setState({ loading: true })

        getData(itemId)
            .then( item => {
                this.setState({ 
                    item,
                    image: getImageUrl(item),
                    loading: false 
                })
            })
    }

    render() {

        const { item, loading, image } = this.state; 

        if (!item) {
            return <span>Select a person from a list</span>
        }

        if (loading) {
            return <Spinner />
        }

        const { name } = this.state.item;

        return (
            <div className='person-details card'>
                <img className='person-image' src={image}/>
                <div className='card-body'>
                    <h4>{name}</h4>
                    <ul className='list-group list-group-flush'>

                        { 
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            }) 
                        }

                        <ErrorButton />
                    </ul>
                </div>
            </div>
        )
    }
}