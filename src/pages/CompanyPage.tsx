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
import { useGetInitQuery } from '../utils/services/initialize.service';

function CompanyPage() {
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
    },[])

    return (
        <div>
        {
            isSuccess && !isLoading ?
            <>
                    <Header />
                    {
                             initData.CompanyCategory.length > 0 && initData.Company.length && (
                                <OurCompany companies={initData.Company} companiesCategory={ initData.CompanyCategory} isHome={false}/>
                            )
                        } 
                    <Footer items={DATA.contactInfo} />
                </>
                :
                <Loader />
        }

    </div>
    )
}

export default CompanyPage