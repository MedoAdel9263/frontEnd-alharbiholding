
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import MainSlider from '../components/slider/MainSlider';
import { useGetPartnersQuery } from '../utils/services/ourPartners.service';
import OurCompany from '../components/our-companies/OurCompany';
import { useGetMainSliderQuery } from '../utils/services/mainSlider.service';
import { useGetOurCompanyCategoryQuery } from '../utils/services/ourCompaniesCategory.service';
import { useGetCompaniesQuery } from '../utils/services/ourCompanies.service';
import Subscribe from '../components/subscribe/Subscribe';
//import StatisticsSection from '../components/statisticsSection/StatisticsSection';
import AboutUs from '../components/about-us/AboutUs';
import Footer from '../components/footer/Footer';
import { useGetAboutUsQuery } from '../utils/services/aboutUs.service';
import { useGetPressReleasesDetailsQuery } from '../utils/services/pressReleaseDetails.service';
import { useGetPressReleasesCategoryQuery } from '../utils/services/pressReleaseCategory.service';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Loader from '../components/loader/Loader';
import PartnersCarousel from '../components/partners/PartnersCarousel';
import ContactUsComponent from '../components/contact-us/ContactUs';
import History from '../components/history/History';
import HistoryList from '../components/history/HistoryList';
import { useGetStatisticQuery } from '../utils/services/statistic.service';
import { Constants } from '../Constants';
import { DATA } from '../../data';
import { Carousel } from 'flowbite-react';
import { useGetInitQuery } from '../utils/services/initialize.service';



function HomePage() {

    // const [Partners, setPartners] = useState<any>([]);
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
            setData(initData.data)
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
                (Constants.ISPRODACTION && isSuccess) ||
                    (!Constants.ISPRODACTION && data.length > 0 ) ?
                    <>
                        {

                            <>

                                {
                                        <Header />
                                }
                                {
                                    initData?.Slider!.length > 0 && (
                                        <MainSlider mainSlides={initData.Slider} />
                                    )
                                }
                                {
                                    initData?.CompanyCategory!.length > 0 && initData?.Company!.length > 0 && (
                                        <OurCompany companies={initData.Company} companiesCategory={initData.CompanyCategory} isHome={true} />
                                    )
                                }
                                {
                                    initData?.History!.length > 0 && (
                                        <HistoryList items={initData.History} isHome={true} />

                                    )
                                }
                                {
                                    initData?.AboutUs!.length > 0 && (
                                        <AboutUs aboutUs={initData.AboutUs} />

                                    )
                                }
                                        <ContactUsComponent items={DATA.contactInfo} />

                                        <Footer items={DATA.contactInfo} />
                            </>
                        }
                    </>
                    :
                    <Loader />
            }

        </>
    );
}

export default HomePage
