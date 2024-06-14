import React, { useEffect, useState } from 'react'
import { useLazyCompanyByIdQuery } from '../utils/services/ourCompanies.service';
import { useParams } from 'react-router-dom';
import Header from '../components/header/Header';
import HistoryItem from '../components/history/HistoryItem';
import Loader from '../components/loader/Loader';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Footer from '../components/footer/Footer';
import CompanyDetails from '../components/our-companies/CompanyDetails';

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
      route
        ?
        companyDetailsData({
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
          (!isLoadingContactInfo && contactInfo.length && isSuccess) ?
            <>
              <Header items={contactInfo} />
              <CompanyDetails item={data} />
              <Footer items={contactInfo} />
            </>
            :
            <Loader />
        }
      </>
    )
  }

export default CompanyDetailsPage