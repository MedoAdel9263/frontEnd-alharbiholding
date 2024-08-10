import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Loader from '../components/loader/Loader';
import AboutUsCategory from '../components/about-us/AboutUsCategory';
import { useGetInitQuery } from '../utils/services/initialize.service';
import { DATA } from '../../data';

function AboutUsPage() {

    const [aboutUs, setAboutUs] = useState<any>([]);

    const {
        data: initData,
        isLoading: isLoading,
        isSuccess: isSuccess,
    } = useGetInitQuery();

    useEffect(() => {

        if (isSuccess){
            setAboutUs(initData.AboutUs)
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
                !isLoading && aboutUs.length ?
                    <>
                        <Header />
                        <AboutUsCategory items={aboutUs} />
                        <Footer items={DATA.contactInfo} />
                    </>
                    :
                    <Loader />
            }
        </>
    )
}

export default AboutUsPage