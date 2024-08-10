import React, { useEffect, useState } from 'react'
import CompamyCategoyCard from '../../common/CompamyCategoyCard'
import CompaniesCard from '../../common/CompaniesCard'
import CompanyDetails from './CompanyDetails';
import { Constants } from '../../Constants';

function OurCompany({ companies, companiesCategory, isHome }: { companies: any[], companiesCategory: any[], isHome: boolean }) {
debugger;
    const [categoryId, setCategoryId] = useState<string>('2aacea8a-a156-ef11-8dd1-a88e80645bef');

    useEffect(() => {
        setCategoryId(companiesCategory[0].Id);
    }, []);

    const onchange = (id) => {
debugger;
        setCategoryId(id);
    }

    return (
        <>
            <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0'>
                <div className='mx-0 md:mx-10 lg:mx-14'>
                    <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[2.75rem]">
                        <div className="max-w-[500px]">
                            <div className="text-left">
                                <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl !text-dynamic !text-black">Companies</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className='flex flex rows justify-center'>
                            {
                                <ul className='inline-flex flex-wrap justify-center gap-[20px] mb-[30px]'>{
                                    companiesCategory.map((item, index) => {
                                        return (
                                            <CompamyCategoyCard key={index} item={item} categoryId={categoryId} setCategoryId={onchange} />
                                        )

                                    })}
                                </ul>

                            }

                        </div>
                        {
                            isHome ? (
                                <div data-aos="fade-up" className=' mb-10 w-full px-[15px]'>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-[-15px] gap-5'>
                                        {
                                            companies.filter(company => Constants.ISPRODACTION ? company?.CompanyCategory?.Id == categoryId : company?.CompanyCategory == categoryId).map((item, index) => {
                                                return (
                                                    <CompaniesCard key={index} item={item} />
                                                )

                                            })
                                        }
                                    </div>
                                </div>
                            )
                                :
                                <div className=' mb-10 w-full px-[15px]'>
                                    <div className='grid grid-cols-1 mx-[-15px] gap-5'>
                                        {
                                            companies.filter(company => Constants.ISPRODACTION ? company?.CompanyCategory?.Id == categoryId : company?.CompanyCategory == categoryId).map((item, index) => {
                                                return (
                                                    <CompanyDetails key={index} item={item} />
                                                )

                                            })
                                        }
                                    </div>
                                </div>
                        }
                    </div>
                </div>
            </section>


        </>


    )
}

export default OurCompany