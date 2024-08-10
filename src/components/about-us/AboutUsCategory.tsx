import React, { useEffect, useState } from 'react'
import AboutUsCardCategory from '../../common/AboutUsCardCategory';
import AboutUsItemCard from '../../common/AboutUsItemCard';
import { Constants } from '../../Constants';

function AboutUsCategory({ items }: { items: any[] }) {
debugger;
    return (
        <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0'>
            <div className='px-[16px] mx-0 md:mx-10 lg:mx-14 my-16'>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[2.75rem]">
                    <div className="max-w-[500px]">
                        <div className="text-left">
                            <div className="sub-style">
                                <h4 className="sub-title">About Us</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    items.map((item, index) => {
                        return (
                            <AboutUsItemCard key={index} item={item} image={Constants.HOSTURL +  item.Photo} />
                        )

                    })
                }

            </div>
        </section>

    )
}

export default AboutUsCategory