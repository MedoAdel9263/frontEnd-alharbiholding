import React, { useEffect, useState } from 'react'
import { useGetAboutUsQuery } from '../utils/services/aboutUs.service';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Loader from '../components/loader/Loader';
import AboutUsCategory from '../components/about-us/AboutUsCategory';
import { DATA } from '../../data';
import { Constants } from '../Constants';

function AboutUsPage() {

    const [aboutUs, setAboutUs] = useState<any>([]);

    const {
        data: aboutUsData,
        isLoading: isLoadingAboutUs,
        isSuccess: isSuccessAboutUs,
    } = useGetAboutUsQuery();

    useEffect(() => {
       
        if (isSuccessAboutUs && Constants.ISPRODACTION)
            setAboutUs(aboutUsData.data)
        else
        setAboutUs(DATA.aboutUs)
    }, [isSuccessAboutUs]);

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
    }, [])


    return (
        <>
            {
                !isLoadingAboutUs && aboutUs.length && !isLoadingContactInfo && contactInfo.length ?
                    <>
                        <Header items={contactInfo} />
                        <AboutUsCategory items={aboutUs} />
                        <Footer items={contactInfo} />
                    </>
                    :
                    <Loader />
            }
        </>
    )
}

export default AboutUsPage