import React from 'react'

function StatisticsSection() {
    return (
        <section className='section-padding-primary overflow-hidden bg-white dark:bg-accent-700 [.light_&]:pt-0'>
               <div className='mx-0 md:mx-10 lg:mx-14'>
            <div className='grid gap-[30px] sm:grid-cols-2 2xl:grid-cols-4'>
                <div className="aos-init aos-animate">
                    <div className="group relative flex items-center">
                        <span className="relative z-1 inline-grid h-[50px] w-[50px] flex-none place-items-center rounded-5  bg-primary text-white">
                            <span className="text-[1.875rem] text-white [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3115_1299)"><path d="M29.0683 19.2494V17.3555H20.1311C20.1311 19.8061 18.0975 21.7927 15.5889 21.7927C13.0802 21.7927 11.0466 19.8061 11.0466 17.3555H2.10938V19.2494L5.99024 19.6508C6.23232 20.6202 6.62425 21.5322 7.14074 22.3621L4.68652 25.3274L7.42829 28.0058L10.4638 25.6083C11.3133 26.1129 12.2469 26.4957 13.2392 26.7322L13.6502 30.5234H17.5276L17.9385 26.7322C18.9308 26.4957 19.8644 26.1129 20.7139 25.6083L23.7494 28.0058L26.4912 25.3274L24.037 22.3621C24.5535 21.5322 24.9454 20.6202 25.1875 19.6508L29.0683 19.2494Z" fill="white"></path><path d="M15.591 0.515625C13.6712 0.515625 12.1094 2.0414 12.1094 3.91676C12.1094 5.79212 13.6712 7.31783 15.591 7.31783C17.5107 7.31783 19.0726 5.79212 19.0726 3.91676C19.0726 2.0414 17.5107 0.515625 15.591 0.515625Z" fill="white"></path><path d="M19.298 8.25781H11.8844C10.1776 8.25787 8.78906 9.61427 8.78906 11.2816V15.5959H22.3933V11.2816C22.3933 9.61427 21.0048 8.25781 19.298 8.25781Z" fill="white"></path><path d="M8.20482 2.08594C6.48505 2.08594 5.08594 3.45277 5.08594 5.13273C5.08594 6.79922 6.46285 8.15673 8.16361 8.17848C8.86793 7.37369 9.83977 6.79928 10.9439 6.58859C11.1859 6.15578 11.3237 5.65973 11.3237 5.13273C11.3237 3.45271 9.9246 2.08594 8.20482 2.08594Z" fill="white"></path><path d="M4.88222 9.02344C3.35328 9.02344 2.10938 10.2385 2.10938 11.7322V15.597H6.98692V11.2827C6.98692 10.466 7.19797 9.69665 7.56903 9.02344H4.88222Z" fill="white"></path><path d="M22.9783 2.08594C21.2585 2.08594 19.8594 3.45277 19.8594 5.13273C19.8594 5.65967 19.9971 6.15578 20.2391 6.58859C21.3433 6.79928 22.3152 7.37369 23.0195 8.17848C24.7202 8.15679 26.0971 6.79922 26.0971 5.13273C26.0971 3.45271 24.698 2.08594 22.9783 2.08594Z" fill="white"></path><path d="M26.2962 9.02344H23.6094C23.9804 9.69665 24.1915 10.466 24.1915 11.2827V15.597H29.069V11.7321C29.069 10.2385 27.8251 9.02344 26.2962 9.02344Z" fill="white"></path></g><defs><clipPath id="clip0_3115_1299"><rect width="30.7167" height="30.0067" fill="white" transform="translate(0.234375 0.515625)"></rect></clipPath></defs></svg>
                            </span>
                        </span>
                        <div className="-ml-5 flex min-h-[120px] flex-1 flex-col justify-center  rounded-[5px] bg-accent-100 p-30px py-2.5 pl-10  bg-gray-200">
                            <h3 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 text-white md:text-2xl">
                                <span className='text-[#141416]'>200K</span>
                            </h3>
                            <p className="-mt-2.5 text-gray-500">Visitor Monthly</p>
                        </div>
                    </div>
                </div>
                <div className="aos-init aos-animate">
                    <div className="group relative flex items-center">
                        <span className="relative z-1 inline-grid h-[50px] w-[50px] flex-none place-items-center rounded-5  bg-primary text-white">
                            <span className="text-[1.875rem] text-white [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3115_1299)"><path d="M29.0683 19.2494V17.3555H20.1311C20.1311 19.8061 18.0975 21.7927 15.5889 21.7927C13.0802 21.7927 11.0466 19.8061 11.0466 17.3555H2.10938V19.2494L5.99024 19.6508C6.23232 20.6202 6.62425 21.5322 7.14074 22.3621L4.68652 25.3274L7.42829 28.0058L10.4638 25.6083C11.3133 26.1129 12.2469 26.4957 13.2392 26.7322L13.6502 30.5234H17.5276L17.9385 26.7322C18.9308 26.4957 19.8644 26.1129 20.7139 25.6083L23.7494 28.0058L26.4912 25.3274L24.037 22.3621C24.5535 21.5322 24.9454 20.6202 25.1875 19.6508L29.0683 19.2494Z" fill="white"></path><path d="M15.591 0.515625C13.6712 0.515625 12.1094 2.0414 12.1094 3.91676C12.1094 5.79212 13.6712 7.31783 15.591 7.31783C17.5107 7.31783 19.0726 5.79212 19.0726 3.91676C19.0726 2.0414 17.5107 0.515625 15.591 0.515625Z" fill="white"></path><path d="M19.298 8.25781H11.8844C10.1776 8.25787 8.78906 9.61427 8.78906 11.2816V15.5959H22.3933V11.2816C22.3933 9.61427 21.0048 8.25781 19.298 8.25781Z" fill="white"></path><path d="M8.20482 2.08594C6.48505 2.08594 5.08594 3.45277 5.08594 5.13273C5.08594 6.79922 6.46285 8.15673 8.16361 8.17848C8.86793 7.37369 9.83977 6.79928 10.9439 6.58859C11.1859 6.15578 11.3237 5.65973 11.3237 5.13273C11.3237 3.45271 9.9246 2.08594 8.20482 2.08594Z" fill="white"></path><path d="M4.88222 9.02344C3.35328 9.02344 2.10938 10.2385 2.10938 11.7322V15.597H6.98692V11.2827C6.98692 10.466 7.19797 9.69665 7.56903 9.02344H4.88222Z" fill="white"></path><path d="M22.9783 2.08594C21.2585 2.08594 19.8594 3.45277 19.8594 5.13273C19.8594 5.65967 19.9971 6.15578 20.2391 6.58859C21.3433 6.79928 22.3152 7.37369 23.0195 8.17848C24.7202 8.15679 26.0971 6.79922 26.0971 5.13273C26.0971 3.45271 24.698 2.08594 22.9783 2.08594Z" fill="white"></path><path d="M26.2962 9.02344H23.6094C23.9804 9.69665 24.1915 10.466 24.1915 11.2827V15.597H29.069V11.7321C29.069 10.2385 27.8251 9.02344 26.2962 9.02344Z" fill="white"></path></g><defs><clipPath id="clip0_3115_1299"><rect width="30.7167" height="30.0067" fill="white" transform="translate(0.234375 0.515625)"></rect></clipPath></defs></svg>
                            </span>
                        </span>
                        <div className="-ml-5 flex min-h-[120px] flex-1 flex-col justify-center  rounded-[5px] bg-accent-100 p-30px py-2.5 pl-10  bg-gray-200">
                            <h3 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 text-white md:text-2xl">
                                <span className='text-[#141416]'>50%</span>
                            </h3>
                            <p className="-mt-2.5 text-gray-500">Growth Monthly</p>
                        </div>
                    </div>
                </div>
                <div className="aos-init aos-animate">
                    <div className="group relative flex items-center">
                        <span className="relative z-1 inline-grid h-[50px] w-[50px] flex-none place-items-center rounded-5  bg-primary text-white">
                            <span className="text-[1.875rem] text-white [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3115_1299)"><path d="M29.0683 19.2494V17.3555H20.1311C20.1311 19.8061 18.0975 21.7927 15.5889 21.7927C13.0802 21.7927 11.0466 19.8061 11.0466 17.3555H2.10938V19.2494L5.99024 19.6508C6.23232 20.6202 6.62425 21.5322 7.14074 22.3621L4.68652 25.3274L7.42829 28.0058L10.4638 25.6083C11.3133 26.1129 12.2469 26.4957 13.2392 26.7322L13.6502 30.5234H17.5276L17.9385 26.7322C18.9308 26.4957 19.8644 26.1129 20.7139 25.6083L23.7494 28.0058L26.4912 25.3274L24.037 22.3621C24.5535 21.5322 24.9454 20.6202 25.1875 19.6508L29.0683 19.2494Z" fill="white"></path><path d="M15.591 0.515625C13.6712 0.515625 12.1094 2.0414 12.1094 3.91676C12.1094 5.79212 13.6712 7.31783 15.591 7.31783C17.5107 7.31783 19.0726 5.79212 19.0726 3.91676C19.0726 2.0414 17.5107 0.515625 15.591 0.515625Z" fill="white"></path><path d="M19.298 8.25781H11.8844C10.1776 8.25787 8.78906 9.61427 8.78906 11.2816V15.5959H22.3933V11.2816C22.3933 9.61427 21.0048 8.25781 19.298 8.25781Z" fill="white"></path><path d="M8.20482 2.08594C6.48505 2.08594 5.08594 3.45277 5.08594 5.13273C5.08594 6.79922 6.46285 8.15673 8.16361 8.17848C8.86793 7.37369 9.83977 6.79928 10.9439 6.58859C11.1859 6.15578 11.3237 5.65973 11.3237 5.13273C11.3237 3.45271 9.9246 2.08594 8.20482 2.08594Z" fill="white"></path><path d="M4.88222 9.02344C3.35328 9.02344 2.10938 10.2385 2.10938 11.7322V15.597H6.98692V11.2827C6.98692 10.466 7.19797 9.69665 7.56903 9.02344H4.88222Z" fill="white"></path><path d="M22.9783 2.08594C21.2585 2.08594 19.8594 3.45277 19.8594 5.13273C19.8594 5.65967 19.9971 6.15578 20.2391 6.58859C21.3433 6.79928 22.3152 7.37369 23.0195 8.17848C24.7202 8.15679 26.0971 6.79922 26.0971 5.13273C26.0971 3.45271 24.698 2.08594 22.9783 2.08594Z" fill="white"></path><path d="M26.2962 9.02344H23.6094C23.9804 9.69665 24.1915 10.466 24.1915 11.2827V15.597H29.069V11.7321C29.069 10.2385 27.8251 9.02344 26.2962 9.02344Z" fill="white"></path></g><defs><clipPath id="clip0_3115_1299"><rect width="30.7167" height="30.0067" fill="white" transform="translate(0.234375 0.515625)"></rect></clipPath></defs></svg>
                            </span>
                        </span>
                        <div className="-ml-5 flex min-h-[120px] flex-1 flex-col justify-center  rounded-[5px] bg-accent-100 p-30px py-2.5 pl-10  bg-gray-200">
                            <h3 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 text-white md:text-2xl">
                                <span className='text-[#141416]'>1M+</span>
                            </h3>
                            <p className="-mt-2.5 text-gray-500">Happy Clients</p>
                        </div>
                    </div>
                </div>
                <div className="aos-init aos-animate">
                    <div className="group relative flex items-center">
                        <span className="relative z-1 inline-grid h-[50px] w-[50px] flex-none place-items-center rounded-5  bg-primary text-white">
                            <span className="text-[1.875rem] text-white [transition:all_500ms_ease] group-hover:[transform:rotateY(180deg)] group-hover:[transition-delay:.1s]">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_3115_1299)"><path d="M29.0683 19.2494V17.3555H20.1311C20.1311 19.8061 18.0975 21.7927 15.5889 21.7927C13.0802 21.7927 11.0466 19.8061 11.0466 17.3555H2.10938V19.2494L5.99024 19.6508C6.23232 20.6202 6.62425 21.5322 7.14074 22.3621L4.68652 25.3274L7.42829 28.0058L10.4638 25.6083C11.3133 26.1129 12.2469 26.4957 13.2392 26.7322L13.6502 30.5234H17.5276L17.9385 26.7322C18.9308 26.4957 19.8644 26.1129 20.7139 25.6083L23.7494 28.0058L26.4912 25.3274L24.037 22.3621C24.5535 21.5322 24.9454 20.6202 25.1875 19.6508L29.0683 19.2494Z" fill="white"></path><path d="M15.591 0.515625C13.6712 0.515625 12.1094 2.0414 12.1094 3.91676C12.1094 5.79212 13.6712 7.31783 15.591 7.31783C17.5107 7.31783 19.0726 5.79212 19.0726 3.91676C19.0726 2.0414 17.5107 0.515625 15.591 0.515625Z" fill="white"></path><path d="M19.298 8.25781H11.8844C10.1776 8.25787 8.78906 9.61427 8.78906 11.2816V15.5959H22.3933V11.2816C22.3933 9.61427 21.0048 8.25781 19.298 8.25781Z" fill="white"></path><path d="M8.20482 2.08594C6.48505 2.08594 5.08594 3.45277 5.08594 5.13273C5.08594 6.79922 6.46285 8.15673 8.16361 8.17848C8.86793 7.37369 9.83977 6.79928 10.9439 6.58859C11.1859 6.15578 11.3237 5.65973 11.3237 5.13273C11.3237 3.45271 9.9246 2.08594 8.20482 2.08594Z" fill="white"></path><path d="M4.88222 9.02344C3.35328 9.02344 2.10938 10.2385 2.10938 11.7322V15.597H6.98692V11.2827C6.98692 10.466 7.19797 9.69665 7.56903 9.02344H4.88222Z" fill="white"></path><path d="M22.9783 2.08594C21.2585 2.08594 19.8594 3.45277 19.8594 5.13273C19.8594 5.65967 19.9971 6.15578 20.2391 6.58859C21.3433 6.79928 22.3152 7.37369 23.0195 8.17848C24.7202 8.15679 26.0971 6.79922 26.0971 5.13273C26.0971 3.45271 24.698 2.08594 22.9783 2.08594Z" fill="white"></path><path d="M26.2962 9.02344H23.6094C23.9804 9.69665 24.1915 10.466 24.1915 11.2827V15.597H29.069V11.7321C29.069 10.2385 27.8251 9.02344 26.2962 9.02344Z" fill="white"></path></g><defs><clipPath id="clip0_3115_1299"><rect width="30.7167" height="30.0067" fill="white" transform="translate(0.234375 0.515625)"></rect></clipPath></defs></svg>
                            </span>
                        </span>
                        <div className="-ml-5 flex min-h-[120px] flex-1 flex-col justify-center  rounded-[5px] bg-accent-100 p-30px py-2.5 pl-10  bg-gray-200">
                            <h3 className="font-secondary text-xl font-bold leading-[1.25] text-accent-900 text-white md:text-2xl">
                                <span className='text-[#141416]'>30+</span>
                            </h3>
                            <p className="-mt-2.5 text-gray-500">Country</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</section>
     
    )
}

export default StatisticsSection