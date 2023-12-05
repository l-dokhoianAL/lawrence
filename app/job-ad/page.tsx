import JobADHeader from "@/components/job-ad/job-ad-header";
import JobADDescription from "@/components/job-ad/job-ad-description";
import JobADContacts from "@/components/job-ad/job-ad-contacts";
import OtherJobs from "@/components/reusable/other-jobs";
import JobContact from "@/components/reusable/job-contact";

export default function JobAd() {
  return (
    <main className="bg-white pt-[240px] h-full px-5 xl:px-0 pb-[145px]">
      <JobADHeader />
      <div className="container flex flex-col lg:flex-row my-16 justify-between gap-5 lg:gap-10">
        <div className="flex flex-col gap-14">
          <JobADDescription />
          <div className="w-full h-[0.25px] bg-purple" />
          <JobADContacts />
        </div>
        <OtherJobs />
      </div>
      <JobContact />
    </main>
  );
}
