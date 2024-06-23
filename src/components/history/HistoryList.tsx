import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Constants } from '../../Constants';

function HistoryList({ items, isHome }: { items: any, isHome: boolean }) {
    const router = useNavigate();
    let pattern = '/history-list/';
    console.log(items[0]?.Image.replace(new RegExp('/history-list/'), '/'))
    return (
        <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0 px-[0px] lg:px-[70px] md:px-[40px] ms:px-[30px] min:h-[100px]'>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[2.75rem]">
                <div className="max-w-[500px]">
                    <div className="text-left">
                        <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">History</h2>
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

                <div className='-mx-4 flex flex-wrap justify-center gap-y-[30px]'>
                    {
                        items.map((item, index) => {
                            return (
                                <div onClick={() => router(`/history-item/${item?.id}`)} key={index} data-aos="fade-up" data-aos-delay="200" className='w-full px-4 md:w-1/2 md:px-[15px] lg:w-1/3 aos-init aos-animate cursor-pointer'>
                                    <article className="group/blog relative z-[1] flex h-full min-h-[452px] flex-col  overflow-hidden rounded-[5px] p-6 md:p-[1.875rem]">
                                        <span className='absolute inset-0 z-[2] bg-accent-900/50'></span>
                                        <img src={Constants.ISPRODACTION ? Constants.HOSTURL + item?.Image?.url! : 'http://localhost:5174/' + item?.Image.replace(new RegExp('/history-list/'), '/')  } loading="lazy" decoding="async" data-nimg="fill" className='pointer-events-none object-cover opacity-0 [filter:blur(10px)] [transform:translatex(50%)_scalex(2)] [transition:all_500ms_ease] group-hover/blog:opacity-100 group-hover/blog:[filter:blur(0px)] group-hover/blog:[transform:translatex(0)_scalex(1)] absolute h-full w-full left-0 top-0' />
                                        <img src={Constants.ISPRODACTION ? Constants.HOSTURL + item?.Image?.url! : 'http://localhost:5174/' + item?.Image.replace(new RegExp('/history-list/'), '/') } loading="lazy" decoding="async" data-nimg="fill" className='pointer-events-none object-cover [transition:all_500ms_ease] group-hover/blog:opacity-0 group-hover/blog:[filter:blur(10px)] group-hover/blog:[transform:translatex(-50%)_scalex(2)] absolute h-full w-full left-0 top-0' />
                                        <div className="mt-auto max-w-[270px] space-y-2 text-white md:space-y-5">
                                            <h3 className="text-md font-bold leading-[1.25]  md:text-lg">
                                                <a aria-label="We implement state-of-the-art encryption" className="text-white transition-colors duration-300   relative z-[2]" >{item?.Title!}</a>
                                            </h3>
                                            <div>
                                                <a  className="inline-flex items-center gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-white transition-colors duration-300  relative z-[2]" >
                                                    <span>View Details</span>
                                                    <span className="text-primary">
                                                        <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            )
                        })
                    }


                </div>
            </div>

        </section>
    )
}

export default HistoryList