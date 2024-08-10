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
                <Header />
                <ContactUsInfo items={DATA.contactInfo}/> 
                <Footer items={DATA.contactInfo} />
            </>   
  )
}

export default ContactUsPage