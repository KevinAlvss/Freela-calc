import React from 'react';
import ReactDOM from 'react-dom';
import { FetchProvider } from './context';
import Routes from './routes';
import { GlobalStyle } from './styles/GlobalStyles';

ReactDOM.render(
  <React.StrictMode>
    <FetchProvider>
      <Routes />
      <GlobalStyle />
    </FetchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
