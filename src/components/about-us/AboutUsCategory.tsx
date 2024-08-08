import React, { useEffect, useState } from 'react'
import AboutUsCardCategory from '../../common/AboutUsCardCategory';
import AboutUsItemCard from '../../common/AboutUsItemCard';

function AboutUsCategory({ items }: { items: any[] }) {

    const [categoryId, setCategoryId] = useState<string>('');

    useEffect(() => {
        setCategoryId(items[0].id);
    }, []);

    const onchange = (id) => {

        setCategoryId(id);
    }

    const setImage = (index: number) => {
        switch (index) {
            case 0:
                return 'about/aboutus-1.jpg'
            case 1:
                return 'about/aboutus-2.png'
            case 2:
                return 'about/aboutus-3.png'
            case 3:
                return 'about/aboutus-4.jpg'
            default:
                return 'about/aboutus-1.jpg'
        }
    }

    return (
        <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0'>
            <div className='px-[16px] mx-0 md:mx-10 lg:mx-14 my-16'>
                <div className="mb-10 flex flex-wrap items-end justify-between gap-x-20 gap-y-10 md:mb-[2.75rem]">
                    <div className="max-w-[500px]">
                        <div className="text-left">
                            <div className="sub-style">
                                <h4 className="sub-title font-bold text-xl !text-[#a39161] relative">About Us</h4>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    items.map((item, index) => {
                        return (
                            <AboutUsItemCard key={index} item={item} image={setImage(items.findIndex(item => item?.id == categoryId))} />
                        )

                    })
                }

            </div>
        </section>

    )
}

export default AboutUsCategory