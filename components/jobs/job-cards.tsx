"use client"
import React, { useState } from 'react';
import ChervonTopIcon from "@/assets/job-page/chervon-top.svg";
import { JOB_CARDS_DATA } from '@/constants/job';

export default function JobCards() {
    const [visibleJobs, setVisibleJobs] = useState(5);

    const handleLoadMore = () => {
        setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 5);
    };

    return (
        <div className="container pt-16 sm:pt-[104px] flex flex-col gap-5 sm:gap-[33px]">
            {JOB_CARDS_DATA.slice(0, visibleJobs).map((job, idx) => (
                <div key={idx} className="w-full relative sm:h-[334px] flex flex-col sm:flex-row group/card bg-white hover:bg-jacarta cursor-pointer p-5 lg:p-10">
                    <div className="flex flex-col gap-2 sm:gap-7 pb-2 sm:pb-0 border-b border-b-charleston-green-light sm:border-r sm:border-b-0 sm:border-r-charleston-green-light">
                        <div className={`${job.publishDate === "New" ? "bg-light-silver py-1 px-2 sm:py-2 sm:px-4 w-max text-purple group-hover/card:bg-green" : ""} text-philippine-silver text-sm sm:text-base`}>
                            <span>{job.publishDate}</span>
                        </div>
                        <p className="text-charleston-green text-lg sm:text-xl md:text-2xl lg:text-[30px] sm:max-w-[300px] lg:max-w-[500px] group-hover/card:text-green">{job.title}</p>
                        <span className="text-philippine-silver text-sm sm:text-base group-hover/card:text-white">{job.salary}</span>
                    </div>
                    <div className="flex flex-col pt-2 sm:pt-0 sm:pl-5 lg:pl-[30px]">
                        <p className="text-philippine-silver text-sm sm:text-base group-hover/card:text-silver-chalice">Job description</p>
                        <div className="text-charleston-green text-sm sm:text-base lg:text-lg max-w-[500px] pt-1 group-hover/card:text-white">
                            <span>{job.description}</span>
                        </div>
                        <div className="flex items-center flex-wrap gap-3 pt-5 sm:pt-[34px]">
                            {job.jobTypes.map((type: string, idx: number) => (
                                <div key={idx} className="bg-light-silver-opacity py-2 px-4 text-sm sm:text-base text-charleston-green group-hover/card:text-white group-hover/card:bg-gainsboro">
                                    <span>{type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="sm:w-[50px] hidden group-hover/card:flex sm:h-[50px] justify-center items-center bg-green absolute right-0 bottom-0">
                        <ChervonTopIcon />
                    </div>
                </div>
            ))}
            {visibleJobs < JOB_CARDS_DATA.length && (
                <button onClick={handleLoadMore}>
                    <span className='text-quick-silver text-sm sm:text-base md:text-lg lg:text-xl font-medium'>Load more jobs</span>
                </button>
            )}
        </div>
    );
};

