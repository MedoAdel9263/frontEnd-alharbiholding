
import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import MainSlider from '../components/slider/MainSlider';
import { mainSlides } from './data';
import { useGetPartnersQuery } from '../utils/services/ourPartners.service';
import OurCompany from '../components/our-companies/OurCompany';
import { useGetMainSliderQuery } from '../utils/services/mainSlider.service';
import { useGetOurCompanyCategoryQuery } from '../utils/services/ourCompaniesCategory.service';
import { useGetCompaniesQuery } from '../utils/services/ourCompanies.service';
import Subscribe from '../components/subscribe/Subscribe';
import StatisticsSection from '../components/statisticsSection/StatisticsSection';
import AboutUs from '../components/about-us/AboutUs';
import ContactUs from '../components/contact-us/ContactUs';
import Footer from '../components/footer/Footer';
import { useGetAboutUsQuery } from '../utils/services/aboutUs.service';
import { useGetPressReleasesDetailsQuery } from '../utils/services/pressReleaseDetails.service';
import { useGetPressReleasesCategoryQuery } from '../utils/services/pressReleaseCategory.service';
import { useGetCareerCenterQuery } from '../utils/services/careerCenter.service';
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Loader from '../components/loader/Loader';
import PartnersCarousel from '../components/partners-carousel/PartnersCarousel';



export default function Home() {

    const [Partners, setPartners] = useState<any>([]);
    const [mainSlider, setMainSlider] = useState<any>([]);
    const [companyCategory, setCompanyCategory] = useState<any>([]);
    const [companies, setCompanies] = useState<any>([]);
    const [aboutUs, setAboutUs] = useState<any>([]);
    const [contactInfo, setContactInfo] = useState<any>([]);
    const [careerCenter, setCareerCenter] = useState<any>([]);
    const [mediaCenterCategory, setMediaCenterCategory] = useState<any>([]);
    const [pressReleaseCategory, setPressReleaseCategory] = useState<any>([]);
    const [pressReleaseDetails, setPressReleaseDetails] = useState<any>([]);

    const {
        data: partnerData,
        isLoading: isLoadingPartners,
        isSuccess: isSuccessPartners,
    } = useGetPartnersQuery();

    const {
        data: companyCategoryData,
        isLoading: isLoadingCompanyCategory,
        isSuccess: isSuccessCompanyCategory,
    } = useGetOurCompanyCategoryQuery();

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
        data: careerCenterData,
        isLoading: isLoadingCareerCenter,
        isSuccess: isSuccessCareerCenter,
    } = useGetCareerCenterQuery();

    const {
        data: pressReleaseCategoryData,
        isLoading: isLoadingPressReleaseCategory,
        isSuccess: isSuccessPressReleaseCategory,
    } = useGetPressReleasesCategoryQuery();

    const {
        data: pressReleaseDetailsData,
        isLoading: isLoadingPressReleaseDetails,
        isSuccess: isSuccessPressReleaseDetails,
    } = useGetPressReleasesDetailsQuery();

    useEffect(() => {

        if (isSuccessPartners)
            setPartners(partnerData.results)
    }, [isSuccessPartners]);

    useEffect(() => {

        if (isSuccessMainslider)
            setMainSlider(mainSliderData.results)
    }, [isSuccessMainslider]);

    useEffect(() => {

        if (isSuccessCompanyCategory)
            setCompanyCategory(companyCategoryData.data)
    }, [isSuccessCompanyCategory]);

    useEffect(() => {

        if (isSuccessCompanies)
            setCompanies(companiesData.results)
    }, [isSuccessCompanies]);

    useEffect(() => {
       
        if (isSuccessContactInfo)
            setContactInfo(contactInfoData.results)
    }, [isSuccessContactInfo]);

    useEffect(() => {
       
        if (isSuccessAboutUs)
            setAboutUs(aboutUsData.data)
    }, [isSuccessAboutUs]);

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
                isSuccessContactInfo && isSuccessCompanies && isSuccessCompanyCategory && isSuccessContactInfo && isSuccessMainslider && isSuccessCareerCenter && isSuccessAboutUs && isSuccessPressReleaseCategory && isSuccessPressReleaseDetails ?
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
                                <OurCompany companies={companies} companiesCategory={companyCategory} />
                            )
                        }
                        <Subscribe />
                        <StatisticsSection />
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
                                <ContactUs items={contactInfo}/>
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
