import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import './App.css';
import Contacts from '../Contacts/Contacts';
import Main from '../Main/Main';
import Products from '../Products/Products';
import ProductItem from '../ProductItem/ProductItem';
import RequiredAuth from '../RequiredAuth/RequiredAuth';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

function App() {
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
              <Route path='/contacts' element={
                <ErrorBoundary>
                  <Contacts />
                </ErrorBoundary>
              } />
              <Route path='/products' element={
                <ErrorBoundary>
                  <Products />
                </ErrorBoundary>
              } /> 
              <Route path='/products/:productId' element={<ProductItem />} />
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
