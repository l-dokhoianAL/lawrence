import ExternalLink from "@/assets/job-ap/external-link.svg";
import HeaderBackground from "@/assets/job-ap/header-background.svg";
import PrimaryBtn from "../buttons/primary-btn";
import { ADDRESS_TAGS, PRICE, TITLE } from "@/constants/job-ad";

export default function JobADHeader() {

    return (
        <div className="container relative w-full bg-green pl-[30px] md:pl-[72px] pr-[30px] pt-14 pb-6 md:min-h-[438px] text-[#1B0D34] overflow-hidden">
            <div className='absolute -right-[100px] -top-[180px] z-0'>
                <HeaderBackground />
            </div>
            <div className='relative z-10 flex flex-col justify-between gap-12'>
                <div className='flex flex-col gap-6 font-normal'>
                    <div className="text-2xl/[40px] md:text-[40px]/[60px] lg:text-[50px] max-w-[650px]">
                        <span>{TITLE}</span>
                    </div>
                    <div className='text-2xl md:text-3xl'>
                        <span>{PRICE}</span>
                    </div>
                    <div className='flex gap-2'>
                        {ADDRESS_TAGS.map(({ id, title }, index) => (
                            <div key={id} className='bg-midnight-blue text-white text-base min-h-[44px] py-3 px-5 flex justify-center items-center text-center'>
                                <span>{title}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='text-base md:text-xl font-medium flex flex-col sm:flex-row justify-between'>
                    <button>
                        <span className=''>Back to all jobs</span>
                    </button>
                    <div className='flex justify-center items-center gap-6'>
                        <button className='flex items-center gap-3'>
                            <span>Email to a colleague</span>
                            <ExternalLink />
                        </button>
                        <div>
                            <PrimaryBtn bgColor="green" color="purple" className="py-3 px-6">
                                Apply
                            </PrimaryBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
