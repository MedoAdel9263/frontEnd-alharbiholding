import React, { useEffect, useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import CareerCenterComponent from '../components/career-center/CareerCenter';
import Loader from '../components/loader/Loader';

function Company() {
    const [contactInfo, setContactInfo] = useState<any>([]);

    const {
        data: contactInfoData,
        isLoading: isLoadingContactInfo,
        isSuccess: isSuccessContactInfo,
    } = useGetContactInfoQuery();
    
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
    },[])
    
    return (
        <div>
        {
            !isLoadingContactInfo && contactInfo.length ?
            <>
                    <Header items={contactInfo} />
                    <CareerCenterComponent items={contactInfo} />
                    <Footer items={contactInfo} />
                </>
                :
                <Loader />
        }

    </div>
    )
}

export default Company