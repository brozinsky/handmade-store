import './App.scss'
import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom"
import Menu from './components/Menu/Menu'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import AdminPage from './pages/AdminPage'
import LoginPage from './pages/LoginPage'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from './queries/getProducts'
import { ProductDataContext } from './contexts/ProductDataContext';
import { AuthProvider } from "./contexts/AuthContext"

import PrivateRoute from "./components/Admin/PrivateRoute"

function App() {
  const location = useLocation();
  const [, setProductData] = React.useContext(ProductDataContext)
  const { data } = useQuery(GET_PRODUCTS)

  React.useEffect(() => {
    if (data) {
      setProductData(data.products_products)
    }
  }, [data, setProductData])

  return (
    <>
      <AuthProvider>
        <Menu />
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={HomePage} />
          <Route path="/sklep" exact component={ShopPage} />
          <Route path="/sklep/:id" component={ProductPage} />
          <Route path="/kontakt" component={ContactPage} />
          <Route path="/o-mnie" component={AboutPage} />
          <Route path="/koszyk" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute exact path="/admin" component={AdminPage} />
          <Route component={HomePage} />
        </Switch>
      </AuthProvider>
    </>
  );
}

export default App;