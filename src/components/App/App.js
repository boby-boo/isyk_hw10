import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Contacts from '../Contacts/Contacts';
import Main from '../Main/Main';
import Products from '../Products/Products';
import ProductItem from '../ProductItem/ProductItem';
import RequiredAuth from '../RequiredAuth/RequiredAuth';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Fragment } from 'react';


const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <header className='header'>
          <Navigation />
        </header>
        <div className="app">
          <Routes>
            <Route path='/main' element={<Main />} />
            <Route path='/products' element={<Products />} />
            <Route path='/products/:productId' element={<ProductItem />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='private' element={
              <RequiredAuth>
                  <PrivateRoute/>
              </RequiredAuth>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
