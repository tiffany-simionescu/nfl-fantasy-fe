import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';

// Redux Dependencies
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { loadState } from './sessionStorage';
import thunk from 'redux-thunk';
import reducer from './reducers/index'; 

// Redux Store
const persistedState = loadState();
const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  reducer,
  persistedState,
  composeEnhancers(applyMiddleware(thunk))
);

// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloProvider } from '@apollo/react-hooks';

// const cache = new InMemoryCache();
// const link = new HttpLink({
//   uri: 'http://graphql.com'
// })

// const client = new ApolloClient({
//   cache,
//   link
// })

// ReactDOM.render(
//   <ApolloProvider client={client}>
//       <App />
//   </ApolloProvider>, 
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
   <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)