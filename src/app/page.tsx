import ModernCollection from "@/components/collection/ModernCollection";
import PerleCollection from "@/components/collection/PerleCollection";
import CoreCollection from "@/components/collection/CoreCollection";
import { BrandCollectionData, HeroSectionData } from "@/database/data";
import BrandOverview from "@/components/BrandOverview";
import Footer from "@/components/footer/Footer";
import MobileFooter from "@/components/footer/MobileFooter";
import ProcessOverview from "@/components/ProcessOverview";
import Testimonials, { HallmarkMarks } from "@/components/Testimonials";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BrandOverview mobileImage={HeroSectionData?.mobileView} desktopImage={HeroSectionData?.initialView} title="Modern Rodeo" textColor="white" buttonTitle="SHOP THE COLLECTION" />
      <ModernCollection />
      <BrandOverview mobileImage={BrandCollectionData?.CoreCollection?.mobileView} desktopImage={BrandCollectionData?.CoreCollection?.initialView} title="Core Collection" textColor="black" />
      <CoreCollection />
      <BrandOverview mobileImage={BrandCollectionData?.PerlCollection?.mobileView} desktopImage={BrandCollectionData?.PerlCollection?.initialView} title="Perle" textColor="white" />
      <PerleCollection />
      <ProcessOverview />
      <Testimonials />
      <HallmarkMarks />
      <div className="block md:hidden">
        <MobileFooter />
      </div>
      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="fixed bottom-0 right-5 z-50 font-[verdana] bg-black text-white px-[10px] py-1 rounded-t-sm text-[16px] cursor-pointer">
        Loyalty Scheme
      </div>
    </div>
  );
}
