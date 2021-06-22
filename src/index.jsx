import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from "react-router-dom"
import { CategoryProvider } from './contexts/CategoryContext'
// import { QueueProductsProvider } from './contexts/QueueProductsContext'
import { CartProvider } from './contexts/CartContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
      <CategoryProvider>
        <CartProvider>
          {/* <QueueProductsProvider> */}
          <App />
          {/* </QueueProductsProvider> */}
        </CartProvider>
      </CategoryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
