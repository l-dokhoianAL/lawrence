import { CONTACT } from '@/constants/job-ad';
import Image from 'next/image';

export default function JobADContacts() {
    const { name, position, email, phone } = CONTACT;

    return (
        <div className="container text-purple font-normal flex flex-col gap-10 items-center lg:items-start">
            <span className='text-center md:text-left text-3xl'>Need to know more about this role?</span>
            <div className="flex flex-col sm:flex-row gap-7 items-center">
                <Image src={CONTACT.img.src} width={140} height={140} alt="contact" />
                <div className='flex flex-col text-xs md:text-base gap-1'>
                    <span className='text-base md:text-2xl'>{name}</span>
                    <span>{position}</span>
                    <div className='flex flex-col'>
                        <span>{email}</span>
                        <span>{phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


