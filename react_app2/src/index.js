import React from 'react';
import ReactDOM from 'react-dom';

import '@babel/polyfill';
import './scss/main.scss';


fetch('https://swapi.co/api/people/1/')
    .then((res) => {
        return res.json()
    })
    .then( body => {
        console.log(body);
    }) 