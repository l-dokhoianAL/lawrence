import { OTHER_JOBS } from "@/constants/job-ad";

export default function OtherJobs() {

    return (
        <div className="bg-purple text-center h-max lg:w-[400px] py-10 px-8 font-normal">
            <div className="text-white text-3xl">
                <span>Other roles you might be interested in:</span>
            </div>
            <div className='flex flex-wrap justify-center gap-7 mt-7'>
                {OTHER_JOBS.map(({ id, status, title, address, description }) => (
                    <div key={id} className='w-[343px] min-h-[275px] p-9 bg-white text-purple text-left flex flex-col gap-3'>
                        <div className='flex flex-col text-base/7 md:text-2xl/[34px]'>
                            <span>{status}</span>
                            <span>{title}</span>
                        </div>
                        <span className='text-base'>{address}</span>
                        <span className='text-xs/[18px]'>{description}</span>
                    </div>
                ))}
            </div>
            <button className='text-xl/[25px] underline text-white mt-11'>
                <span>Search all jobs</span>
            </button>
        </div>
    );
};
