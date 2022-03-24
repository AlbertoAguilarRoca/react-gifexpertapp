import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GifExpertApp from './GifExpertApp';

const divRoot = document.getElementById('root');

ReactDOM.render( <GifExpertApp defaultCategories={['One Punch']} />, divRoot);


