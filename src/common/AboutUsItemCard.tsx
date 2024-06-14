import React from 'react'

function AboutUsItemCard({item ,image}:{item:any,image:string}) {
  return (
    <>
    <div className='relative flex flex-col'>
<div className='keen-slider max-md:order-2'>
<div className='keen-slider__slide !overflow-visible'>
    <div className='h-full rounded-[5px] bg-accent-100 p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] dark:bg-accent-700 sm:p-[50px]'>
        <div className='flex flex-col gap-12 xl:flex-row md:gap-5'>
    <div className='relative max-w-max flex-none'>
    <img src={image} className='rounded-[5px] object-cover w-full md:w-[15rem] lg:w-[20rem]'/>
    </div>
    <div className='flex-1'>
        <h3 className='text-md font-bold leading-[1.25] text-accent-900 dark:text-white md:text-lg'>{item?.attributes?.Title}</h3>
        <div className='mt-8'>
        {item?.attributes?.Description}
        </div>
    </div>
        </div>
    </div>
</div>
</div>

    </div>
    </>
  )
}

export default AboutUsItemCard