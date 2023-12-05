import HomeBanner from "@/components/home/banner";
import Blogs from "@/components/home/blogs";
import CompanySlide from "@/components/home/company-slider";
import FindRole from "@/components/home/find-role";
import OperationelCoverage from "@/components/home/operational-coverage";
import OurService from "@/components/home/our-service";
import TechStack from "@/components/home/teck-stack";
import Testimonials from "@/components/home/testimonials";

export default function Home() {
  return (
    <main className="bg-purple sm:pt-[160px]  sm:min-h-screen">
      <HomeBanner />
      <TechStack />
      <div className="bg-gradientPurpleBlue bg-no-repeat">
        <CompanySlide />
        <OurService />
        <Testimonials />
      </div>
      <div className="bg-white">
        <FindRole />
        <OperationelCoverage />
      </div>
      <Blogs />
    </main>
  );
}
