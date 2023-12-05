import { DESCRIPTION } from "@/constants/job-ad";
import PrimaryBtn from "../buttons/primary-btn";

export default function JobADDescription() {

    return (
        <div className="container">
            <div>
                <div className="text-purple text-base md:text-xl/[34px] whitespace-pre-line">
                    <span>{DESCRIPTION}</span>
                </div>
                <div className="mt-10">
                    <PrimaryBtn bgColor="white" color="purple" className="py-3 px-6">
                        Apply
                    </PrimaryBtn>
                </div>
            </div>
        </div>
    );
};
