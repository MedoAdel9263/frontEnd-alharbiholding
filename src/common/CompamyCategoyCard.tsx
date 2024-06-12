import React from 'react'

function CompamyCategoyCard({ item ,categoryId,setCategoryId}: { item: any ,categoryId:string,setCategoryId:Function  }) {
    return (
        <button onClick={() => setCategoryId(item.id)} className={`our-cpmpany-btn bg-gray-200 dark:text-white overflow-hidden text-base leading-[1.1] font-bold font-secondary tracking-wide uppercase [transition:all_0.3s_linear] items-center md:min-h-[3.75rem] min-h-[3.5rem] px-6 md:px-7 py-2 md:py-3 transition-colors ease-in-out ring-offset-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:h-full after:w-0 after:bottom-0 after:right-0 after:-z-1 after:[transition:all_.3s_ease-in-out] hover:text-white dark:hover:text-white hover:after:w-full hover:after:left-0 rounded-[5px] group/button relative z-1 flex !min-h-[3.5rem] justify-between gap-2 bg-accent-100 text-accent-900 dark:bg-accent-700 after:bg-primary hover:after:opacity-100 cursor-pointer ${categoryId == item.id ? 'bg-primary text-white' : ''}`}>
            <span className={`relative z-[1]`}>{item.attributes.Title}</span>
            <svg className={` z-[1]`} width="28" height="9" viewBox="0 0 28 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path className={`${categoryId == item.id ? '!fill-white' : ''}`}  d="M27.3536 4.86918C27.5488 4.67391 27.5488 4.35733 27.3536 4.16207L24.1716 0.980089C23.9763 0.784827 23.6597 0.784827 23.4645 0.980089C23.2692 1.17535 23.2692 1.49193 23.4645 1.6872L26.2929 4.51562L23.4645 7.34405C23.2692 7.53931 23.2692 7.85589 23.4645 8.05116C23.6597 8.24642 23.9763 8.24642 24.1716 8.05116L27.3536 4.86918ZM4.37114e-08 5.01562L27 5.01562L27 4.01562L-4.37114e-08 4.01562L4.37114e-08 5.01562Z"></path></svg>
        </button>
    )
}

export default CompamyCategoyCard