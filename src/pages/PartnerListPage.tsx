import React, { useEffect, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { useGetContactInfoQuery } from '../utils/services/contactInfo.service';
import Loader from '../components/loader/Loader';
import { useGetPartnersQuery } from '../utils/services/ourPartners.service';
import Partners from '../components/partners/Partners';
import { Constants } from '../Constants';
import { DATA } from '../../data';

function PartnerListPage() {

    const [contactInfo, setContactInfo] = useState<any>([]);
    const [partners, setPartners] = useState<any>([]);

    const {
        data: contactInfoData,
        isLoading: isLoadingContactInfo,
        isSuccess: isSuccessContactInfo,
    } = useGetContactInfoQuery();

    const {
        data: partnerData,
        isLoading: isLoadingPartners,
        isSuccess: isSuccessPartners,
    } = useGetPartnersQuery();



    useEffect(() => {
       
        if (isSuccessContactInfo && Constants.ISPRODACTION)
            setContactInfo(contactInfoData.results)
        else
        setContactInfo(DATA.contactInfo)
    }, [isSuccessContactInfo]);

    useEffect(() => {

        if (isSuccessPartners && Constants.ISPRODACTION)
            setPartners(partnerData.results)
        else
        setPartners(DATA.partners)
    }, [isSuccessPartners]);

    useEffect(() => {
        setTimeout(() => {


            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });

        }, 100);
    }, [])

    return (
        <div>
            {
                !isLoadingContactInfo && contactInfo.length ?
                    <>
                        <Header />

                        <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl py-10 px-8">Our Partners</h2>

                        {
                            partners.map((partner, index) => {
                                return (
                                    <Partners key={index} item={partner} />
                                )
                            })
                        }
                        <Footer items={DATA.contactInfo} />
                    </>
                    :
                    <Loader />
            }

        </div>
    )
}

export default PartnerListPage