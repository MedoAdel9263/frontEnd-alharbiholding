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

function HistoryListPage() {
  debugger;
  const route = useParams();

  const [contactInfo, setContactInfo] = useState<any>([]);
  const [pressReleaseDetailsData, { data, isSuccess }] = useLazyPressReleasesDetailsByCategoryIdQuery();

  const {
    data: contactInfoData,
    isLoading: isLoadingContactInfo,
    isSuccess: isSuccessContactInfo,
  } = useGetContactInfoQuery();

  React.useEffect(() => {
    route && Constants.ISPRODACTION
      ?
      pressReleaseDetailsData({
        id: route.id
      })

      : null;
  }, [isSuccess]);



  useEffect(() => {
debugger;
    if (isSuccessContactInfo && Constants.ISPRODACTION)
      setContactInfo(contactInfoData.results)
    else
      setContactInfo(DATA.contactInfo)
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
        (!isLoadingContactInfo && contactInfo.length > 0 && isSuccess && Constants.ISPRODACTION) || !Constants.ISPRODACTION && contactInfo.length > 0  ?
          <>
            <Header items={contactInfo} />
            {
              Constants.ISPRODACTION
                ?
                <HistoryList items={data.results} isHome={false} />
                :
                <HistoryList items={DATA.pressReleaseDetails.filter(x => x.Category.toString() == route.id)} isHome={false} />
            }
            <Footer items={contactInfo} />
          </>
          :
          <Loader />
      }
    </>
  )
}

export default HistoryListPage