import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';

import reportWebVitals from './reportWebVitals';


import { Provider } from 'react-redux';
import { store } from './store';

import './assets/scss/scss.test.scss';
import './assets/scss/sass.test.sass';
import './assets/css/global.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


reportWebVitals();
