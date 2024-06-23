
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import MainSlider from '../components/slider/MainSlider';
import { useGetPartnersQuery } from '../utils/services/ourPartners.service';
import OurCompany from '../components/our-companies/OurCompany';
import { useGetMainSliderQuery } from '../utils/services/mainSlider.service';
import { useGetOurCompanyCategoryQuery } from '../utils/services/ourCompaniesCategory.service';
import { useGetCompaniesQuery } from '../utils/services/ourCompanies.service';
import Subscribe from '../components/subscribe/Subscribe';
import StatisticsSection from '../components/statisticsSection/StatisticsSection';
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



function HomePage() {

    const [Partners, setPartners] = useState<any>([]);
    const [mainSlider, setMainSlider] = useState<any>([]);
    const [companyCategory, setCompanyCategory] = useState<any>([]);
    const [companies, setCompanies] = useState<any>([]);
    const [aboutUs, setAboutUs] = useState<any>([]);
    const [contactInfo, setContactInfo] = useState<any>([]);
    const [pressReleaseDetails, setPressReleaseDetails] = useState<any>([]);
    const [statistic, setStatistic] = useState<any>([]);
 if(Constants.ISPRODACTION){
    
 }
    const {
        data: partnerData,
        isLoading: isLoadingPartners,
        isSuccess: isSuccessPartners,
    } = useGetPartnersQuery();

    const {
        data: mainSliderData,
        isLoading: isLoadingMainslider,
        isSuccess: isSuccessMainslider,
    } = useGetMainSliderQuery();

    const {
        data: companiesData,
        isLoading: isLoadingCompanies,
        isSuccess: isSuccessCompanies,
    } = useGetCompaniesQuery();

    const {
        data: companyCategoryData,
        isLoading: isLoadingCompanyCategory,
        isSuccess: isSuccessCompanyCategory,
    } = useGetOurCompanyCategoryQuery();

    const {
        data: aboutUsData,
        isLoading: isLoadingAboutUs,
        isSuccess: isSuccessAboutUs,
    } = useGetAboutUsQuery();

    const {
        data: contactInfoData,
        isLoading: isLoadingContactInfo,
        isSuccess: isSuccessContactInfo,
    } = useGetContactInfoQuery();

    const {
        data: pressReleaseDetailsData,
        isLoading: isLoadingPressReleaseDetails,
        isSuccess: isSuccessPressReleaseDetails,
    } = useGetPressReleasesDetailsQuery();

    const {
        data: statisticData,
        isLoading: isLoadingStatistic,
        isSuccess: isSuccessStatistic,
    } = useGetStatisticQuery();

    useEffect(() => {

        if (isSuccessPartners && Constants.ISPRODACTION)
            setPartners(partnerData.results)
        else
        setPartners(DATA.partners)
    }, [isSuccessPartners]);

    useEffect(() => {

        if (isSuccessMainslider && Constants.ISPRODACTION)
            setMainSlider(mainSliderData.results)
        else
        setMainSlider(DATA.mainSlider)
    }, [isSuccessMainslider]);

    useEffect(() => {

        if (isSuccessCompanyCategory && Constants.ISPRODACTION)
            setCompanyCategory(companyCategoryData.data)
        else
        setCompanyCategory(DATA.companyCategory)
    }, [isSuccessCompanyCategory]);

    useEffect(() => {

        if (isSuccessCompanies && Constants.ISPRODACTION)
            setCompanies(companiesData.results)
        else
        setCompanies(DATA.ourCompanies)
    }, [isSuccessCompanies]);

    useEffect(() => {
       
        if (isSuccessContactInfo && Constants.ISPRODACTION)
            setContactInfo(contactInfoData.results)
        else
        setContactInfo(DATA.contactInfo)
    }, [isSuccessContactInfo]);

    useEffect(() => {
       
        if (isSuccessAboutUs && Constants.ISPRODACTION)
            setAboutUs(aboutUsData.data)
        else
        setAboutUs(DATA.aboutUs)
    }, [isSuccessAboutUs]);

    useEffect(() => {
       
        if (isSuccessPressReleaseDetails && Constants.ISPRODACTION)
            setPressReleaseDetails(pressReleaseDetailsData.results?.slice(-3))
        else
        setPressReleaseDetails(DATA.pressReleaseDetails.slice(-3))
    }, [isSuccessPressReleaseDetails]);

    useEffect(() => {
       
        if (isSuccessStatistic && Constants.ISPRODACTION)
            setStatistic(statisticData.data)
        else
        setStatistic(DATA.statistic)
    }, [isSuccessStatistic]);

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
               ( Constants.ISPRODACTION && isSuccessContactInfo && isSuccessCompanies && isSuccessCompanyCategory && isSuccessContactInfo && isSuccessMainslider && isSuccessAboutUs && isSuccessPressReleaseDetails && isSuccessStatistic) ||  !Constants.ISPRODACTION ?
                    <>
                    {
                            !isLoadingContactInfo && contactInfo.length > 0 && (
                                <Header items={contactInfo}/>
                            )
                        }
                        {
                            !isLoadingMainslider && mainSlider.length > 0 && (
                                <MainSlider mainSlides={mainSlider} />
                            )
                        }
                        {
                            !isLoadingCompanies && !isLoadingCompanyCategory && companyCategory.length > 0 && companies.length && (
                                <OurCompany companies={companies} companiesCategory={companyCategory} isHome={true}/>
                            )
                        }
                        <Subscribe />
                        {
                            !isLoadingStatistic && statistic.length > 0  &&(
                                <StatisticsSection items={statistic}/>
                            )
                        } 
                        {
                            !isLoadingPressReleaseDetails && pressReleaseDetails.length > 0 && (
                                <HistoryList items={pressReleaseDetails} isHome={true} />
                            )
                        } 
                        {
                            !isLoadingAboutUs && aboutUs.length > 0 && (
                                <AboutUs aboutUs={aboutUs} />
                            )
                        } 

                        {
                            !isLoadingPartners && Partners.length > 0 && (
                                <PartnersCarousel items={Partners} />
                            )
                        }
                          {
                            !isLoadingContactInfo && contactInfo.length > 0 && (
                                <ContactUsComponent items={contactInfo}/>
                            )
                        }
                           {
                            !isLoadingContactInfo && contactInfo.length && (
                                <Footer items={contactInfo}/>
                            )
                        }
                    </>
                    :
                    <Loader />
            }

        </>
    );
}

export default  HomePage
