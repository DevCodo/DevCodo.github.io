import React from 'react';

import './ItemDetails.scss';
import Spinner from '../Spinner/Spinner';

export class ItemDetails extends React.Component {

  state = {
    item: {},
    image: null,
    loading: true
  }

  loadItem() {
    const { itemId, getData, getImageUrl }= this.props;
    if (!itemId) return;
    getData(itemId)
      .then( item => {
        this.setState({item, loading: false, image: getImageUrl(item)})
      })
  }

  componentDidMount() {
    this.loadItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.setState({loading: true})
      this.loadItem();
    };
  }



  render() {

    const { item, loading, image } = this.state;

    const info = (
      <>
        <img className="item-image"
        src={image} />
        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            {
              React.Children.map(this.props.children, (child, ind) => {
                return React.cloneElement(child, { item })
              })
            }
          </ul>
        </div>
      </>
    )

    const content = loading ? <Spinner /> : info;
    
    return (
      <div className="item-details card">
        {content}
      </div>
    );
  }
}

export default ItemDetails;
