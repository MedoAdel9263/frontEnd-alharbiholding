import React, { useEffect, useState } from 'react'
import { useLazyCompanyByIdQuery } from '../utils/services/ourCompanies.service';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import HistoryItem from '../components/history/HistoryItem';
import Loader from '../components/loader/Loader';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Footer from '../components/footer/Footer';
import CompanyDetails from '../components/our-companies/CompanyDetails';
import { Constants } from '../Constants';
import { DATA } from '../../data';

function CompanyDetailsPage() {
    const route = useParams();

    const [contactInfo, setContactInfo] = useState<any>([]);
    const [companyDetailsData, { data, isSuccess }] = useLazyCompanyByIdQuery();
  
    const {
      data: contactInfoData,
      isLoading: isLoadingContactInfo,
      isSuccess: isSuccessContactInfo,
    } = useGetContactInfoQuery();
  
    React.useEffect(() => {
      debugger;
      route && Constants.ISPRODACTION
        ?
        companyDetailsData({
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
          (!isLoadingContactInfo && contactInfo.length > 0 && isSuccess && Constants.ISPRODACTION) ||
          (!Constants.ISPRODACTION && contactInfo.length > 0) ?
            <>
              <Header items={contactInfo} />
              {
                 Constants.ISPRODACTION ?
                 <CompanyDetails item={data} />
                 :
                 <CompanyDetails item={DATA.ourCompanies.filter(x => x.id.toString() == route.id).pop()} />
              }
              <Footer items={contactInfo} />
            </>
            :
            <Loader />
        }
      </>
    )
  }

export default CompanyDetailsPage