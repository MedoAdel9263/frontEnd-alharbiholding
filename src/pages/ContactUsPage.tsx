import React, { useEffect, useState } from 'react'
import { useGetAboutUsQuery } from '../utils/services/aboutUs.service';
import Header from '../components/header/Header';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import ContactUsComponent from '../components/contact-us/ContactUs';
import ContactUsInfo from '../components/contact-us/ContactUsInfo';
import { Constants } from '../Constants';
import { DATA } from '../../data';

function ContactUsPage() {

    const [contactInfo, setContactInfo] = useState<any>([]);

    const {
        data: contactInfoData,
        isLoading: isLoadingContactInfo,
        isSuccess: isSuccessContactInfo,
    } = useGetContactInfoQuery();
    

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
    },[])

  return (
    <>
 {
        !isLoadingContactInfo && contactInfo.length ?
        <>
                <Header items={contactInfo} />
                <ContactUsInfo items={contactInfo} /> 
                <Footer items={contactInfo} />
            </>
            :
            <Loader />
    }
    </>
   
    
  )
}

export default ContactUsPage