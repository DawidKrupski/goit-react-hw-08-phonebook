import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './index.css';
import { presistor, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function Root() {
  return (
    <ChakraProvider>
      <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={presistor}>
              <App />
            </PersistGate>
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
    </ChakraProvider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
