import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useLazyPressReleasesDetailsByIdQuery } from '../utils/services/pressReleaseDetails.service';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import HistoryItem from '../components/history/HistoryItem';
import { Constants } from '../Constants';
import { DATA } from '../../data';
import { useGetHistoryByIdMutation } from '../utils/services/initialize.service';

function HistoryDetailsPage() {
  debugger;
  const route = useParams();

  const [data, response] = useGetHistoryByIdMutation();

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
              response.data && (
               
                <HistoryItem item={response.data} />
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

export default HistoryDetailsPage