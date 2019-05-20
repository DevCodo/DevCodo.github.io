import React from 'react';
import {BookstoreServiceConsumer} from '../bookstoreServiceContext';

const withBookstoreService = () => (Wrapped) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreServise) => {
            <Wrapped {...props} bookstoreServise={bookstoreServise}/>
          }
        }
      </BookstoreServiceConsumer>
    )
  }
};

export default withBookstoreService;
