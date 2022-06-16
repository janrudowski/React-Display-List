import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const names = ['Dave', 'John', 'Paul', 'James', 'Jack', 'Henry'];

const elements = names.map((el) => <li>{el}</li>);
root.render(<ol>{elements}</ol>);
