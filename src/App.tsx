
import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import HomePage from './pages/HomePage';
import ScrollTop from './common/ScrollTop';
import CompanyPage from './pages/CompanyPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import 'aos/dist/aos.css';
import AOS from 'aos';
import HistoryCategoryPage from './pages/HistoryCategoryPage';
import HistoryListPage from './pages/HistoryListPage';
import PartnerListPage from './pages/PartnerListPage';
import HistoryDetailsPage from './pages/HistoryDetailsPage';
import CompanyDetailsPage from './pages/CompanyDetailsPage';

const App: React.FC = () => {

  AOS.init();

  return (
    <>
     <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <Routes>
              <Route path="*" Component={HomePage} />
              <Route path='/' Component={HomePage} />
              <Route path='/home' Component={HomePage} />
              <Route path='/partners' Component={PartnerListPage} />
              <Route path='/company' Component={CompanyPage} />
              <Route path='/company-details/:id' Component={CompanyDetailsPage} />
              <Route path='/about-us' Component={AboutUsPage} />
              <Route path='/contact-us' Component={ContactUsPage} />
              <Route path='/history-item/:id' Component={HistoryDetailsPage} />
              <Route path='/history-list/:id' Component={HistoryListPage} />
              <Route path='/history-category' Component={HistoryCategoryPage} />
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
