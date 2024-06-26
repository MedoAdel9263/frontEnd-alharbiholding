import React from 'react'
import { Constants } from '../../Constants'

function Partners({ item }: { item: any }) {

    return (
        <div className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0 px-[0px] lg:px-[70px] md:px-[40px] ms:px-[30px] min:h-[100px] !p-4'>

            <div className='relative flex flex-col'>
                <div className='keen-slider max-md:order-2'>
                    <div className='keen-slider__slide !overflow-visible'>
                        <div className='h-full rounded-[5px] bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] dark:bg-accent-700 sm:p-[50px]'>
                            <div className='flex flex-col gap-12 xl:flex-row md:gap-5'>
                                <div className='relative max-w-max flex-none'>
                                    <img src={Constants.ISPRODACTION ? `${Constants.HOSTURL}${item?.Image?.url}` : item?.Image} className='rounded-[5px] object-cover w-full md:w-[25rem] lg:w-[30rem]' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg'>{item?.Title}</h3>

                                    <div className="my-2 h-px bg-body/30 lg:my-2"></div>
                                    <div className='mt-4'>
                                        {item?.Description}
                                    </div>
                                    <a href={item?.Link} target='_blank' className='flex items-center gap-2.5'>
                                        <span className="flex-none text-sm text-primary"> {item?.Link}</span>
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

export default Partners