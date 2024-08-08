import React from 'react'
import { Constants } from '../Constants'

function AboutUsItemCard({item ,image}:{item:any,image:string}) {
  return (
    <>

<div className='relative flex flex-col'>
<div className='keen-slider max-md:order-2'>
<div className='keen-slider__slide !overflow-visible'>
    <div className='h-full rounded-[5px] p-6 transition-transform duration-350 hover:[transform:translateY(-.5rem)] sm:p-[50px]'>
        <div className='flex flex-col gap-0 lg:gap-[50px] lg:flex-row  items-center'>
    <div className='relative max-w-max flex-none' data-aos='fade-right'>
    <img src={image} className='rounded-[5px] object-cover h-auto lg:max-h-[22rem]'/>
    </div>
    <div data-aos='fade-left' className='flex-1 mt-[3rem] lg:mt-0'>
        <h3 className='text-md font-bold leading-[1.25] !text-dynamic text-primary mb-[1.5rem]'>{Constants.ISPRODACTION ? item.attributes.Title : item.Title}</h3>
        <div dangerouslySetInnerHTML={{ __html: Constants.ISPRODACTION ? item.attributes.Description : item.Description }} className='mt-8 text-[#848383]'>
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