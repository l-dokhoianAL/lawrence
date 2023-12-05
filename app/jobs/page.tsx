import JobCards from "@/components/jobs/job-cards";
import JobSearch from "@/components/jobs/job-search";
import JobContact from "@/components/reusable/job-contact";

export default function Jobs() {
  return (
    <main className="bg-purple pt-28 sm:pt-[160px] h-full px-5 xl:px-0 pb-[145px]">
      <JobSearch />
      <JobCards />
      <JobContact />
    </main>
  );
}
