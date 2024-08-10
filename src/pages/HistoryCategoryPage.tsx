import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Loader from '../components/loader/Loader';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Footer from '../components/footer/Footer'
import { useGetPressReleasesCategoryQuery } from '../utils/services/pressReleaseCategory.service';
import History from '../components/history/History';
import { Constants } from '../Constants';
import { DATA } from '../../data';
import { useGetInitQuery } from '../utils/services/initialize.service';

function HistoryCategoryPage() {

  const [data, setData] = useState<any>([]);
    if (Constants.ISPRODACTION) {

    }

    const {
        data: initData,
        isLoading: isLoading,
        isSuccess: isSuccess,
    } = useGetInitQuery();

    useEffect(() => {

        if (isSuccess){
          debugger;
            setData(initData.HistoryCategory)
        }
    }, [isSuccess]);


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
        isSuccess ?
          <>
            <Header />
            {
              isSuccess && initData?.HistoryCategory?.length > 0 && (
                <History items={initData.HistoryCategory} isHome={false}/>
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

export default HistoryCategoryPage