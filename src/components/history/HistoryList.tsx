import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Constants } from '../../Constants';

function HistoryList({ items, isHome }: { items: any, isHome: boolean }) {
    const router = useNavigate();
    debugger;
    return (
        <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0 px-[0px] lg:px-[70px] md:px-[40px] ms:px-[30px] min:h-[100px]'>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[2.75rem]">
                <div className="max-w-[500px]">
                    <div className="text-left">
                        <h2 className="sub-title">History</h2>
                        {!isHome&&<h2 className="font-bold">{items[0].HistoryCategory.Title}</h2>}
                    </div>
                </div>
                {
                    isHome && (
                        <div>
                            <a target="_self" onClick={() => router('/history-category')} className="inline-flex items-center gap-[.625rem] font-secondary text-base font-bold uppercase leading-[2] tracking-wide text-white transition-colors duration-300  relative z-[2] bg-primary cursor-pointer px-10 py-2 rounded-[50px] hover:text-primary hover:bg-white border border-primary">
                                <span>Read More</span>
                            </a>
                        </div>
                    )
                }
            </div>
            <div className='mx-auto'>

                <div className='-mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-[30px]' style={{gridAutoRows: "1fr;"}}>
                    {
                        items.map((item, index) => {
                            return (
                                <div data-aos="fade-up" onClick={() => router(`/history-item/${item?.Id}`)} >
                                    <div className="bg-white rounded animate__animated animate__fadeInUp" >
                                        <div className="rounded-t">
                                            <img src={Constants.ISPRODACTION ? Constants.HOSTURL + item?.Image : item?.Image.replace(new RegExp('/history-list/'), '/')} className="w-full h-48 rounded-t object-cover	" alt="Image" />
                                        </div>
                                        <div className="rounded-b border border-t-0 p-4">
                                            <a href="#" className="text-xl mb-3 block truncate">{item?.Title!}</a>
                                            <p className="my-4 text-ellipsis overflow-hidden h-[50px] text-[#848383]">{item?.Details!}</p>
                                            <a className="btn bg-primary text-white rounded-full py-2 px-4 hover:text-primary hover:bg-white border hover:border-primary" href="#">View Details</a>
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

export default HistoryList