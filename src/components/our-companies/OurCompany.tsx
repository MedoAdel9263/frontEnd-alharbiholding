import React, { useEffect, useState } from 'react'
import CompamyCategoyCard from '../../common/CompamyCategoyCard'
import CompaniesCard from '../../common/CompaniesCard'

function OurCompany({ companies, companiesCategory }: { companies: any[], companiesCategory: any[] }) {

   const [categoryId , setCategoryId] = useState<string>('7');

//    useEffect(() => {
//     setCategoryId(companiesCategory[0].id);
//    },[]);

   const onchange =(id) => {
    debugger
    setCategoryId(id);
   }

    return (
        <>
            <div className='mt-8 md:mt-12 px-[16px] mx-0 md:mx-10 lg:mx-14'>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[2.75rem]">
                    <div className="max-w-[500px]">
                        <div className="text-left">
                            <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">Our Companies</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-[30px] lg:grid-cols-[300px_1fr]">
                    <div className='grid gap-5 [&_.mixitup-control-active]:after:opacity-100 [&_.mixitup-control-active]:after:[transform:perspective(400px)_rotateX(0deg)] [&_.mixitup-control-active]:after:[transition:all_3.s_linear]'>
                        {
                            companiesCategory.map((item,index) => {
                                return (
                                    <CompamyCategoyCard key={index} item={item} categoryId={categoryId} setCategoryId={onchange} />
                                )

                            })
                        }

                    </div>
                    <div className=' mb-10 w-full px-[15px]'>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 mx-[-15px] gap-5'>
                        {
                            companies.filter(company => company?.company_category?.id == categoryId).map((item,index) => {
                                return (
                                    <CompaniesCard key={index} item={item} />
                                )

                            })
                        }
                        </div>
                    </div>
                </div>
            </div>

        </>


    )
}

export default OurCompany