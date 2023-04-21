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
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <header className='header'>
          <Navigation />
        </header>
        <div className="app">
          <Routes>
            <Route path='/main' element={
                <ErrorBoundary>
                  <Main />
                </ErrorBoundary>
            } />
          </Routes>
          <Routes>
            <Route path='/products' element={
                <ErrorBoundary>
                  <Products />
                </ErrorBoundary>
            } />
            <Route path='/products/:productId' element={<ProductItem />} />
          </Routes>
          <Routes>
            <Route path='/contacts' element={
                <ErrorBoundary>
                  <Contacts />
                </ErrorBoundary>
            } />
          </Routes>
          <Routes>
            <Route path='private' element={
              <RequiredAuth>
                <ErrorBoundary>
                  <PrivateRoute/>
                </ErrorBoundary>
              </RequiredAuth>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
