import React, { useEffect, useState } from 'react'
import { useGetPressReleasesDetailsQuery, useLazyPressReleasesDetailsByCategoryIdQuery } from '../utils/services/pressReleaseDetails.service';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import HistoryList from '../components/history/HistoryList';

function HistoryListPage() {
  const route = useParams();

  const [contactInfo, setContactInfo] = useState<any>([]);
  const [pressReleaseDetailsData, { data, isSuccess }] = useLazyPressReleasesDetailsByCategoryIdQuery();

  const {
    data: contactInfoData,
    isLoading: isLoadingContactInfo,
    isSuccess: isSuccessContactInfo,
  } = useGetContactInfoQuery();

  React.useEffect(() => {
    route
      ?
      pressReleaseDetailsData({
        id: route.id
      })

      : null;
  }, [isSuccess]);


  useEffect(() => {

    if (isSuccessContactInfo)
      setContactInfo(contactInfoData.results)
  }, [isSuccessContactInfo]);



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
        !isLoadingContactInfo && contactInfo.length && isSuccess ?
          <>
            <Header items={contactInfo} />
            <HistoryList items={data.results} isHome={false} />
            <Footer items={contactInfo} />
          </>
          :
          <Loader />
      }
    </>
  )
}

export default HistoryListPage