import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Loader from '../components/loader/Loader';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Footer from '../components/footer/Footer'
import { useGetPressReleasesCategoryQuery } from '../utils/services/pressReleaseCategory.service';
import History from '../components/history/History';

function HistoryCategoryPage() {

  const [contactInfo, setContactInfo] = useState<any>([]);
  const [pressReleaseCategory, setPressReleaseCategory] = useState<any>([]);

  const {
    data: contactInfoData,
    isLoading: isLoadingContactInfo,
    isSuccess: isSuccessContactInfo,
  } = useGetContactInfoQuery();

  const {
    data: pressReleaseCategoryData,
    isLoading: isLoadingPressReleaseCategory,
    isSuccess: isSuccessPressReleaseCategory,
  } = useGetPressReleasesCategoryQuery();

  useEffect(() => {

    if (isSuccessContactInfo)
      setContactInfo(contactInfoData.results)
  }, [isSuccessContactInfo]);

  useEffect(() => {

    if (isSuccessPressReleaseCategory)
      setPressReleaseCategory(pressReleaseCategoryData.results)
  }, [isSuccessPressReleaseCategory]);

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
        !isLoadingContactInfo && contactInfo.length ?
          <>
            <Header items={contactInfo} />
            {
              !isLoadingPressReleaseCategory && pressReleaseCategory.length > 0 && (
                <History items={pressReleaseCategory} isHome={false}/>
              )
            }
            <Footer items={contactInfo} />
          </>
          :
          <Loader />
      }
    </>
  )
}

export default HistoryCategoryPage