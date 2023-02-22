import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import Reduxthunk from 'redux-thunk'
import logger from 'redux-logger';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Reduxthunk, logger)
)) //미들웨어 사용하려면 데브툴즈 안에 넣어줄것 데브툴즈 사용 안할꺼면 compose 없이 적어주면됨 myLogger는 내가 만든 미들웨어 원래는 안만들고 라이브러리로 사용함  
//createStore(rootReducer,applyMiddleware(myLogger)) 데브툴즈 사용 안할시 미들웨어만 사요앟ㄹ시 
// 미들웨어는 여러개 사용 가능
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
