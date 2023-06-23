import React from 'react';
import ReactDOM from 'react-dom/client';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store }      /*для створення глобального State */>                                
      <PersistGate loading={null} persistor={persistor}    /*для збереження даних в Local storage*/>      
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
