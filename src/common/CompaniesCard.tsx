import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Constants } from '../Constants';

function CompaniesCard({ item }: { item: any }) {
    const router = useNavigate();
    return (
        // <div onClick={() => router(`/company-details/${item?.id}`)} className="filter-item mb-10 w-full px-[15px]">
        //     <div className="group/project block">
        //         <div className="relative z-1 cursor-pointer overflow-hidden rounded-5 after:absolute after:inset-0 after:z-1 after:bg-black after:[transform-origin:top] after:[transition:.5s] max-lg:after:opacity-60 lg:after:opacity-0 lg:after:[transform:perspective(400px)_rotateX(-10deg)] lg:group-hover/project:after:opacity-60 lg:group-hover/project:after:[transform:perspective(400px)_rotateX(0deg)]">
        //             <img alt={item.Title} loading="lazy" width="640" height="454" decoding="async" data-nimg="1" className="transition-transform duration-1000 ease-in-out group-hover/project:scale-105" style={{ color: 'transparent', maxHeight: '14rem', height: '12rem', backgroundSize: 'cover' }} sizes="(min-width: 768px) 50vw,100vw" src={Constants.ISPRODACTION ? Constants.HOSTURL + item.Image.url : item.Image } />
        //             <button className="absolute left-1/2 top-1/2 z-[2] grid h-[60px] w-[60px] place-items-center rounded-full bg-white text-[25px] text-accent-700 [transform:translate(-50%,-50%)] [transition:.5s] lg:opacity-0 lg:group-hover/project:opacity-100">
        //                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
        //             </button>
        //         </div>
        //         <div className="mt-5">
        //             <h3 className="h3">
        //                 <a target="_self" className="text-black transition-colors duration-350 hover:text-primary" href="/project/single">{item.Title}</a>
        //             </h3>
        //             <a target='_blank' href={'https://' + item.Link} className="mt-1 text-body text-gray-400">{item.Link}</a>
        //         </div>
        //     </div>
        // </div>

        <div style={{"animationDelay" : " 0.1s;"}}>
            <div data-aos='fade-up' className="bg-[#f4f7fc] rounded-md" style={{"animationDelay" : "0.5s;"}}>
                <div className="flex justify-center items-center">
                    <img src={Constants.ISPRODACTION ? Constants.HOSTURL + item.Image.url : item.Image } className="w-[50%] my-16 h-[80px] max-h-[80px]" alt="Image" />
                </div>
                <div className="bg-light rounded-b p-[1.5rem]">
                   
                    <a href="#" style={{fontSize : "calc(1.275rem + 0.3vw)" , fontWeight:"500"}} className="mb-3 block truncate">{item.Title}</a>
                    <p className="mb-[1.5rem] text-ellipsis overflow-hidden h-[120px] text-[#848383]">
                    {item?.Description}
                    </p>
                    <a className="btn bg-primary text-white rounded-full py-2 px-4 hover:text-primary hover:bg-white border hover:border-primary" target='_blank' href={'https://' + item.Link}>{item.Link}</a>
                </div>
            </div>
        </div>
    )
}

export default CompaniesCard