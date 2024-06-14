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
                            <h2 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 dark:text-white md:text-2xl">About Us</h2>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 items-start gap-[30px] lg:grid-cols-[300px_1fr]">
                    <div className='grid gap-5 [&_.mixitup-control-active]:after:opacity-100 [&_.mixitup-control-active]:after:[transform:perspective(400px)_rotateX(0deg)] [&_.mixitup-control-active]:after:[transition:all_3.s_linear]'>
                        {
                            items.map((item, index) => {
                                return (
                                    <AboutUsCardCategory key={index} item={item} categoryId={categoryId} setCategoryId={onchange} />
                                )

                            })
                        }

                    </div>
                    <div className=' mb-10 w-full px-[15px]'>
                        <div className='grid grid-cols-1 md:grid-cols-1 mx-[-15px] gap-5'>
                            {
                                items.filter(item => item?.id == categoryId).map((item, index) => {
                                    return (
                                        <AboutUsItemCard key={index} item={item} image={setImage(items.findIndex(item => item?.id == categoryId))} />
                                    )

                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default AboutUsCategory