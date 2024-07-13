import React from 'react'
import { Constants } from '../../Constants'

function CompanyDetails({ item }: { item: any }) {

    return (
        <div className=''>

            <div className='relative flex flex-col'>
                <div className='keen-slider max-md:order-2'>
                    <div className='keen-slider__slide !overflow-visible'>
                        <div className='h-full rounded-[5px] bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] dark:bg-accent-700 sm:p-[50px]'>
                            <div className='flex flex-col gap-12 xl:flex-row md:gap-5 md:md-[40%] justify-center items-center'>
                                <div className='relative  flex-none w-[25%] text-center'>
                                    <img src={Constants.ISPRODACTION ? `${Constants.HOSTURL}${item?.Image?.url}` : item?.Image.replace(new RegExp('/company-details/'), '/')} className='rounded-[5px] object-cover w-[12rem] m-auto' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg'>{item?.Title}</h3>

                                    <div className="my-2 h-px bg-body/30 lg:my-2"></div>
                                    <div className='mt-4'>
                                        {item?.Description}
                                    </div>
                                    <a href={item?.Link} target='_blank' className='flex items-center gap-2.5 mt-8 '>
                                        <span className="flex-none text-sm py-2 px-10 rounded-[50px] font-xl text-primary bg-primary text-white hover:text-primary hover:bg-white border border-primary"> {item?.Link}</span>
                                    </a>
                                </div>
                                    
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CompanyDetails