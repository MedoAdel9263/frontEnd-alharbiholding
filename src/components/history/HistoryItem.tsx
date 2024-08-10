import React from 'react'
import { Constants } from '../../Constants'
import moment from 'moment'

function HistoryItem({ item }: { item: any }) {
   
debugger;
debugger;
    return (
        <div className='section-padding-primary'>

            <div className='relative flex flex-col'>
                <div className='keen-slider max-md:order-2'>
                    <div className='keen-slider__slide !overflow-visible'>
                        <div className='h-full rounded-[5px] bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] dark:bg-accent-700 sm:p-[50px]'>
                            <div className='flex flex-col gap-12 xl:flex-row md:gap-5'>
                                <div className='relative max-w-max flex-none'>
                                    <img src={Constants.ISPRODACTION ? `${Constants.HOSTURL}${item?.Image}` :  item?.Image.replace(new RegExp('/history-list/'), '/')} className='rounded-[5px] object-cover w-full md:w-[25rem] lg:w-[30rem]' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg'>{item?.Title}</h3>
                                    {/* <ul className='mb-4 flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 lg:mb-5 lg:mt-30px'>
                                        <li className='flex items-center gap-2.5'>
                                            <span className="flex-none text-sm text-primary"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg></span>
                                            <span> {moment(item?.updatedAt).format('MM/DD/YYYY')}</span>
                                        </li>
                                    </ul> */}
                                    <div className="my-2 h-px bg-body/30 lg:my-2"></div>
                                    <div className='mt-4'>
                                        {item?.Details}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='[&_p+P]:mt-4'>
                <img src={`${Constants.HOSTURL}${item?.Image?.url}`} />
                <ul className='mb-4 mt-6 flex flex-wrap items-center gap-x-[1.125rem] gap-y-2 lg:mb-5 lg:mt-30px'>
                    <li className='flex items-center gap-2.5'>
                        <span className="flex-none text-sm text-primary"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"></path></svg></span>
                        <span> {moment(item?.updatedAt).format('MM/DD/YYYY')}</span>
                    </li>
                </ul>
                <div className="my-4 h-px bg-body/30 lg:my-5"></div>
                <p> {item?.Description}</p>
            </div> */}
        </div>
    )
}

export default HistoryItem