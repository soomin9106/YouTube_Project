import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import Youtube from './service/youtube-axios.js';

const youtube = new Youtube('\nAIzaSyCn6zHwluvRmlGmdiyyM-xSHclyeO2CEZ4\n');
ReactDOM.render(
  <React.StrictMode>
    <App youtube={youtube}/>
  </React.StrictMode>,
  document.getElementById('root')
);

