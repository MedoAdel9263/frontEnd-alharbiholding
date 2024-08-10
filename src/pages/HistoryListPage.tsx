import React, { useEffect, useState } from 'react'
import { useGetPressReleasesDetailsQuery, useLazyPressReleasesDetailsByCategoryIdQuery } from '../utils/services/pressReleaseDetails.service';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import HistoryList from '../components/history/HistoryList';
import { Constants } from '../Constants';
import { DATA } from '../../data';
import { useGetHistoryByCategoryIdMutation } from '../utils/services/initialize.service';

function HistoryListPage() {
  const route = useParams();

  const [data, response] = useGetHistoryByCategoryIdMutation();

  React.useEffect(() => {
    data({
      Id: route.id
    }) 
  }, []);


  useEffect(() => {
    setTimeout(() => {


      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    }, 100);
  }, [])

  return (
    <>
      {
        response.isSuccess && !response.isLoading ?
          <>
            <Header />
            {
              response.data.length > 0 && (
                <HistoryList items={response.data} isHome={false} />
              )
            }
            <Footer items={DATA.contactInfo} />
          </>
          :
          <Loader />
      }
    </>
  )
}

export default HistoryListPage