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

function HistoryDetailsPage() {
  const route = useParams();

  const [contactInfo, setContactInfo] = useState<any>([]);
  const [pressReleaseDetailsData, { data, isSuccess }] = useLazyPressReleasesDetailsByIdQuery();

  const {
    data: contactInfoData,
    isLoading: isLoadingContactInfo,
    isSuccess: isSuccessContactInfo,
  } = useGetContactInfoQuery();

  React.useEffect(() => {
    debugger;
    route && Constants.ISPRODACTION
      ?
      pressReleaseDetailsData({
        id: route.id
      })

      : null;
  }, [isSuccess]);


 
  useEffect(() => {
       
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
        (!isLoadingContactInfo && contactInfo.length && isSuccess && Constants.ISPRODACTION) || (!Constants.ISPRODACTION && contactInfo.length > 0) ?
          <>
            <Header items={contactInfo} />
            {
              Constants.ISPRODACTION ?
              <HistoryItem item={data} />
              :
              <HistoryItem item={DATA.pressReleaseDetails.filter(x => x.id.toString() == route.id).pop()} />
            }
            <Footer items={contactInfo} />
          </>
          :
          <Loader />
      }
    </>
  )
}

export default HistoryDetailsPage