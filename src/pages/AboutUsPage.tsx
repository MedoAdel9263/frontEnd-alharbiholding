import React, { useEffect, useState } from 'react'
import { useGetAboutUsQuery } from '../utils/services/aboutUs.service';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Loader from '../components/loader/Loader';
import AboutUsCategory from '../components/about-us/AboutUsCategory';

function AboutUsPage() {

    const [aboutUs, setAboutUs] = useState<any>([]);

    const {
        data: aboutUsData,
        isLoading: isLoadingAboutUs,
        isSuccess: isSuccessAboutUs,
    } = useGetAboutUsQuery();

    useEffect(() => {

        if (isSuccessAboutUs)
            setAboutUs(aboutUsData.data)
    }, [isSuccessAboutUs]);

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