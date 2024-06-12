
import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import Home from './pages/home';
import ScrollTop from './common/ScrollTop';
import partners from './pages/partners';
import CareerCenter from './pages/CareerCenter';
import Company from './pages/Company';
import MediaCenter from './pages/MediaCenter';

const App: React.FC = () => {

  return (
    <>
     <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="*" Component={Home} />
              <Route path='/' Component={Home} />
              <Route path='/home' Component={Home} />
              <Route path='/partners' Component={partners} />
              <Route path='/career-center' Component={CareerCenter} />
              <Route path='/company' Component={Company} />
              <Route path='/media-center' Component={MediaCenter} />
            </Routes>

          </BrowserRouter>
        </React.StrictMode>
        ,
      </Provider>
    <ScrollTop />
    </>
     
  )
}

export default App
