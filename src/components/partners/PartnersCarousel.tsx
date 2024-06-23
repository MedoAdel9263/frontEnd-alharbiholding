import React from 'react'
import { Constants } from '../../Constants'

function PartnersCarousel({ items }: { items: any[] }) {
    
    return (
        <div className='section-padding-primary overflow-hidden !py-14 '>
            <div className='whitespace-nowrap border-y border-accent-200 py-7 dark:border-white dark:border-opacity-30 inline-block w-[100vw] '>
                <div className='inline-flex w-full flex-row overflow-hidden  lg:gap-[38px] animate-marquee'>
                    <div className='flex animate-infinite-scroll items-center justify-center gap-8 md:justify-start lg:gap-[38px] w-full'>
                        {
                            items.map((item , index) => {
                                return (
                                        <div key={index} className='flex items-center justify-center gap-8 lg:gap-[38px] w-full'>
                                            <img className='h2 font-secondary text-accent-900 dark:text-white' src={Constants.ISPRODACTION ? item.Image.url :  item.Image } />
                                            <span className='text-xl text-primary lg:text-[50px]'>
                                                <svg width="1em" height="1em" viewBox="0 0 50 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M44.0351 24.4941L38.3559 22.8712C35.7985 22.1502 33.4688 20.7849 31.5899 18.906C29.711 17.0271 28.3457 14.6974 27.6247 12.1399L26.0018 6.46076C25.9202 6.26207 25.7813 6.09212 25.6029 5.97252C25.4244 5.85292 25.2145 5.78906 24.9997 5.78906C24.7849 5.78906 24.5749 5.85292 24.3965 5.97252C24.2181 6.09212 24.0792 6.26207 23.9976 6.46076L22.3747 12.1399C21.6537 14.6974 20.2884 17.0271 18.4095 18.906C16.5306 20.7849 14.2009 22.1502 11.6434 22.8712L5.96427 24.4941C5.74621 24.556 5.55429 24.6873 5.41763 24.8682C5.28097 25.049 5.20703 25.2695 5.20703 25.4962C5.20703 25.7229 5.28097 25.9433 5.41763 26.1242C5.55429 26.305 5.74621 26.4364 5.96427 26.4983L11.6434 28.1212C14.2009 28.8422 16.5306 30.2075 18.4095 32.0864C20.2884 33.9653 21.6537 36.295 22.3747 38.8524L23.9976 44.5316C24.0595 44.7497 24.1908 44.9416 24.3717 45.0782C24.5525 45.2149 24.773 45.2888 24.9997 45.2888C25.2264 45.2888 25.4468 45.2149 25.6277 45.0782C25.8085 44.9416 25.9399 44.7497 26.0018 44.5316L27.6247 38.8524C28.3457 36.295 29.711 33.9653 31.5899 32.0864C33.4688 30.2075 35.7985 28.8422 38.3559 28.1212L44.0351 26.4983C44.2532 26.4364 44.4451 26.305 44.5817 26.1242C44.7184 25.9433 44.7923 25.7229 44.7923 25.4962C44.7923 25.2695 44.7184 25.049 44.5817 24.8682C44.4451 24.6873 44.2532 24.556 44.0351 24.4941Z"></path></svg>
                                            </span>
                                        </div>
                                )
                            })
                        }
                    </div> 
                </div>
            </div>
            
        </div>
    )
}

export default PartnersCarousel