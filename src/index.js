import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "slick-carousel/slick/slick.css"; 
import { Provider } from 'react-redux'
import store from './redux/store'
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.css"
import 'react-quill/dist/quill.snow.css';
import 'medium-zoom/dist/medium-zoom.min.js'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

window.dataLayer.push ({ 
  event: 'pageview'
})

serviceWorker.unregister();
