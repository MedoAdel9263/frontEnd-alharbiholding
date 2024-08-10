import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Constants } from '../../Constants';

function History({ items, isHome }: { items: any, isHome: boolean }) {
    const router = useNavigate();
debugger
    return (
        <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0 px-[0px] lg:px-[70px] md:px-[40px] ms:px-[30px]'>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[2.75rem]">
                <div className="max-w-[500px]">
                    <div className="text-left">
                        <h2 className="sub-title">History</h2>
                    </div>
                </div>
                {
                    isHome && (
                        <div>
                            <a target="_self" onClick={() => router('/history-category')} className="inline-flex items-center gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-white transition-colors duration-300  relative z-[2] bg-primary cursor-pointer px-2 py-2 md:px-4 md:py-4 rounded-[5px]">
                                <span>Read More</span>
                                <span className="text-primary">
                                    <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                                </span>
                            </a>
                        </div>
                    )
                }

            </div>
            <div className='mx-auto'>

            <div className='-mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   justify-center gap-y-[30px]'>
                    {
                        items.map((item, index) => {
                            return (
                                <div data-aos='fade-up' onClick={() => router(`/history-list/${item.Id}`)} className="owl-item mr-[25px]" >
                                <div className="bg-white rounded animate__animated animate__fadeInUp" >
                                  <div className="rounded-t">
                                    <img src={isHome ? Constants.HOSTURL + item?.Photo! : Constants.HOSTURL + item?.Image! } className="w-full h-48 rounded-t object-cover	" alt="Image" />
                                  </div>
                                  <div className="rounded-b border border-t-0 p-4">
                                    <a href="#" className="text-xl mb-3 block truncate">{item?.Title!}</a>
                                    {/* <p className="mb-3 truncate">{item?.Details!}</p> */}
                                    <a className="btn bg-primary text-white rounded-full py-2 px-4 hover:text-primary hover:bg-white border hover:border-primary" href="#">Read More</a>
                                  </div>
                                </div>
                              </div>
                            )
                        })
                    }


                </div>
            </div>

        </section>
    )
}

export default History