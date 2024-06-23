import React, { useEffect, useState } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Loader from '../components/loader/Loader';
import OurCompany from '../components/our-companies/OurCompany';
import { useGetCompaniesQuery } from '../utils/services/ourCompanies.service';
import { useGetOurCompanyCategoryQuery } from '../utils/services/ourCompaniesCategory.service';
import { Constants } from '../Constants';
import { DATA } from '../../data';

function CompanyPage() {
    const [contactInfo, setContactInfo] = useState<any>([]);
    const [companyCategory, setCompanyCategory] = useState<any>([]);
    const [companies, setCompanies] = useState<any>([]);
    
    const {
        data: contactInfoData,
        isLoading: isLoadingContactInfo,
        isSuccess: isSuccessContactInfo,
    } = useGetContactInfoQuery();

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
                    {
                            !isLoadingCompanies && !isLoadingCompanyCategory && companyCategory.length > 0 && companies.length && (
                                <OurCompany companies={companies} companiesCategory={companyCategory} isHome={false}/>
                            )
                        } 
                    <Footer items={contactInfo} />
                </>
                :
                <Loader />
        }

    </div>
    )
}

export default CompanyPage